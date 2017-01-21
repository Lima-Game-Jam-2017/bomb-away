var Game = function(game) {

	this.bombs;
};

Game.prototype = {

	preload: function() {
		game.load.script('bomb', 'objects/bomb.js');
	},

	create: function() {
		this.stage.disableVisibilityChange = false;

		const total = 10;

		this.bombs = game.add.group();
		this.bombs.enableBody = true;
		this.bombs.physicsBodyType = Phaser.Physics.ARCADE;

		for (var i = 0; i < total; ++i) {
			var bomb = new Bomb(this, i * 10 + 80, i * 10 + 80);
			this.bombs.add(bomb);
			bomb.setupBody();
		}
	}
};