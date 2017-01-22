var Game = function(game) {

	this.level;
	this.bombs;
	this.won;
};

Game.prototype = {

	create: function() {
		this.stage.disableVisibilityChange = false;

		const total = 10;

		this.level = 1;
		this.bombs = game.add.group();
		this.bombs.enableBody = true;
		this.bombs.physicsBodyType = Phaser.Physics.ARCADE;

		this.setupBombs(levels[this.level - 1]);
	},

	setupBombs: function(config) {
		var total = config.straightWaves;
		for (var i = 0; i < total; ++i) {
			var bomb = new Bomb(this, BombType.DANGEROUS_BOMB_STRAIGHT_WAVE, Math.random() * this.world.width, Math.random() * this.world.heght);
			this.bombs.add(bomb);
			bomb.setupBody();
			bomb.events.onInputDown.add(this.onBombPressed, this);
		}
		total = config.diagonalWaves;
		for (var i = 0; i < total; ++i) {
			var bomb = new Bomb(this, BombType.DANGEROUS_BOMB_DIAGONAL_WAVE, Math.random() * this.world.width, Math.random() * this.world.heght);
			this.bombs.add(bomb);
			bomb.setupBody();
			bomb.events.onInputDown.add(this.onBombPressed, this);
		}
		total = config.eightWaves;
		for (var i = 0; i < total; ++i) {
			var bomb = new Bomb(this, BombType.DANGEROUS_BOMB_EIGHT_WAVE, Math.random() * this.world.width, Math.random() * this.world.heght);
			this.bombs.add(bomb);
			bomb.setupBody();
			bomb.events.onInputDown.add(this.onBombPressed, this);
		}
		total = config.safes;
		for (var i = 0; i < total; ++i) {
			var bomb = new Bomb(this, BombType.SAFE_BOMB, Math.random() * this.world.width, Math.random() * this.world.heght);
			this.bombs.add(bomb);
			bomb.setupBody();
			bomb.events.onInputDown.add(this.onBombPressed, this);
		}
	},

	onBombPressed: function(bomb, pointer) {
		bomb.detonate();
		this.bombs.remove(bomb);
		console.log(bomb);
		console.log(pointer);
	},

	nextLevel: function() {
		this.restart();
		if (levels.length < this.level) {
			won = true;
			return;
		}
		this.setupBombs(levels[this.level++]);
	},

	restart: function() {
		this.bombs.removeAll();
	},

	gameOver: function() {

	}
};