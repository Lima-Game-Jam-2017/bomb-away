var Game = function(game) {

	this.level;
	this.bombs;
	this.won;
	this.touchAvailable;
};

Game.prototype = {

	create: function() {
		this.stage.disableVisibilityChange = false;

		const total = 10;

		this.level = 1;
		this.touchAvailable = true;
		this.bombs = game.add.group();
		this.bombs.enableBody = true;
		this.bombs.physicsBodyType = Phaser.Physics.ARCADE;

		this.setupBombs(levels[this.level - 1]);
	},

	setupBombs: function(config) {
		this.addBombs(BombType.DANGEROUS_BOMB_STRAIGHT_WAVE, config.straightWaves);
		this.addBombs(BombType.DANGEROUS_BOMB_DIAGONAL_WAVE, config.diagonalWaves);
		this.addBombs(BombType.DANGEROUS_BOMB_EIGHT_WAVE, config.eightWaves);
		this.addBombs(BombType.SAFE_BOMB, config.safes);
	},

	addBombs: function(type, total) {
		for (var i = 0; i < total; ++i) {
			var bomb = new Bomb(this, type, Math.random() * this.world.width, Math.random * this.world.heght);
			this.bombs.add(bomb);
			bomb.setupBody();
			bomb.events.onInputDown.add(this.onBombPressed, this);
		}
	},

	onBombPressed: function(bomb, pointer) {
		if (this.touchAvailable) {
			console.log("detonate!!");
			bomb.detonate();
			this.bombs.remove(bomb);
			this.touchAvailable = false;
		}
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
		this.touchAvailable = true;
	},

	gameOver: function() {

	}
};