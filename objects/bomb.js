Bomb = function(game, x, y) {

	Phaser.Sprite.call(this, game, x, y, 'bomb_img');

	this.anchor.setTo(0.5, 0.5);
	game.add.existing(this);
};

Bomb.prototype = Object.create(Phaser.Sprite.prototype);
Bomb.prototype.constructor = Bomb;

Bomb.prototype.setupBody = function() {
	this.body.collideWorldBounds = true;
	this.body.velocity.x = game.rnd.integerInRange(-50, 50);
	this.body.velocity.y = 100 + Math.random() * 100;
	this.body.bounce.setTo(0.9, 0.9);
};