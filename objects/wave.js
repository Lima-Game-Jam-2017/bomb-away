
Wave = function(game, x, y,vx,vy,angle) {
    Phaser.Sprite.call(this, game, x, y, 'wave_img');

    this.vx = vx;
    this.vy = vy;
    this.angle = angle;
    this.anchor.setTo(0.5, 0.5);
    game.add.existing(this);
};

Wave.prototype = Object.create(Phaser.Sprite.prototype);
Wave.prototype.constructor = Wave;

Wave.prototype.setupBody = function() {
    this.body.velocity.x = this.vx;
    this.body.velocity.y = this.vy;
    this.body.bounce.setTo(0.9, 0.9);
};

Wave.prototype.dismiss = function() {
    this.kill();
}