const BombType = {
    DANGEROUS_BOMB_STRAIGHT_WAVE: 'bomb_img',
    DANGEROUS_BOMB_DIAGONAL_WAVE: 'bomb_img',
    DANGEROUS_BOMB_EIGHT_WAVE: 'bomb_img',
    SAFE_BOMB: 'bomb_img'
};

Bomb = function(game, type, x, y) {
	Phaser.Sprite.call(this, game, x, y, type);

    this.type = type;
	this.anchor.setTo(0.5, 0.5);
    this.inputEnabled = true;
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

Bomb.prototype.detonate = function() {
    // Show sprites for waves
    this.kill();
    this.destroy();
}