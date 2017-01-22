var Game = function(game, parent) {
	Phaser.State.call(this, game, parent);
	this.level;
	this.bombs;
	this.waves;
	this.won;
	this.liveWaves;
	this.detonationStarted;
	this.detonated;
	this.safesDetonated;
	this.touchAvailable;
	this.levelText;
	this.goalText;
	this.scoreText;
	this.goal;
	this.score;
};

Game.prototype = {

	create: function() {
		this.goalText = game.add.bitmapText(20, 10, 'carrier_command','Goal: ',15);
    	this.goalText.inputEnabled = true;

    	this.scoreText = game.add.bitmapText(game.world.width /2, 10, 'carrier_command','Score: ',15);
    	this.scoreText.inputEnabled = true;

		this.stage.disableVisibilityChange = false;

		this.level = 0;
		this.detonated = 0;	
		this.safesDetonated = 0;
		this.liveWaves = 0;
		this.goal = "";
		this.score = 0;
		this.touchAvailable = true;
		this.detonationStarted = false;
		this.bombs = game.add.group();
		this.waves = game.add.group();

		this.bombs.enableBody = true;
		this.bombs.physicsBodyType = Phaser.Physics.ARCADE;

		this.waves.enableBody = true;
		this.waves.physicsBodyType = Phaser.Physics.ARCADE;

		this.setupBombs(levels[this.level]);
	},

	update: function() {
		game.physics.arcade.overlap(this.waves, this.bombs, this.onWaveHitBomb, null, this);
		if (this.detonationStarted && this.liveWaves == 0)  {
			var goal = levels[this.level].goal;
			console.log(this.detonated);
			console.log(this.safesDetonated);
			if (this.detonated >= goal && this.safesDetonated == 0) {
				this.nextLevel();
			} else {
				this.restart();
				this.gameOver();
			}
		}
		this.updateGoalText(this.detonated,levels[this.level].goal);
		this.updateScoreText(this.score);
	},

	setupBombs: function(config) {
		this.addBombs(BombType.DANGEROUS_BOMB_STRAIGHT_WAVE, config.straightWaves);
		this.addBombs(BombType.DANGEROUS_BOMB_DIAGONAL_WAVE, config.diagonalWaves);
		this.addBombs(BombType.DANGEROUS_BOMB_EIGHT_WAVE, config.eightWaves);
		this.addBombs(BombType.SAFE_BOMB, config.safes);
	},

	addBombs: function(type, total) {
		for (var i = 0; i < total; ++i) {
			var ranx = Math.random() * this.world.width;
			var rany = Math.random() * this.world.height;
			var bomb = new Bomb(this, type, ranx, rany);
			bomb.checkWorldBounds = true;
			this.bombs.add(bomb);
			bomb.setupBody();
			bomb.events.onInputDown.add(this.onBombPressed, this);
		}
	},

	addWaves: function(waves) {
		for (var i = 0; i < waves.length; ++i) {
			var wave = waves[i];
			this.waves.add(wave);
			wave.checkWorldBounds = true;
			wave.setupBody();
			wave.events.onOutOfBounds.add(this.removeWave, this);
		}
		this.liveWaves += waves.length;
	},

	removeWave: function(wave) {
		wave.dismiss();
		this.waves.remove(wave);
		--this.liveWaves;
	},

	detonateBomb: function(bomb) {
		var waves = bomb.detonate();
		this.bombs.remove(bomb);
		this.addWaves(waves);
		this.detonationStarted = true;
		(bomb.type == BombType.SAFE_BOMB) ? ++this.safesDetonated : (++this.detonated, this.score += 100);
	},

	onBombPressed: function(bomb, pointer) {
		if (this.touchAvailable) {
			this.detonateBomb(bomb);
			this.touchAvailable = false;
		}
	},

	onWaveHitBomb: function(wave, bomb) {
		this.removeWave(wave);
		this.detonateBomb(bomb);
	},

	nextLevel: function() {
		this.restart();
		if (levels.length <= this.level + 1) {
			won = true;
			this.gameOver();
		} else {
			this.setupBombs(levels[++this.level]);
		}
	},

	restart: function() {
		this.bombs.removeAll();
		this.touchAvailable = true;
		this.detonated = 0;
		this.liveWaves = 0;
		this.detonationStarted = false;
		this.safesDetonated = 0;
	},

	gameOver: function() {
		if (this.won) {
			alert('Congrats, you have completed all levels!');
		}
		game.state.start('Credits');
	},

	updateGoalText: function(current,goal) {
		this.goalText.text = "GOAL: " + current + " / "+ goal; 
	},

	updateScoreText: function(total){
		this.scoreText.text = "SCORE: " + total;
	}
};