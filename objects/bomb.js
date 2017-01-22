const BombType = {
    DANGEROUS_BOMB_STRAIGHT_WAVE: 'straight_img',
    DANGEROUS_BOMB_DIAGONAL_WAVE: 'diagonal_img',
    DANGEROUS_BOMB_EIGHT_WAVE: 'eight_img',
    SAFE_BOMB: 'safe_img'
};

const BombProperties = {
    bombRandomStartingAngleLeft : [-120,120],
    bombRandomStartingAngleRight: [-60,60],
    bombSpeed : 100

}

Bomb = function(game, type, x, y) {
	Phaser.Sprite.call(this, game, x, y, type);
    console.log(type);
    this.type = type;
	this.anchor.setTo(0.5, 0.5);
    this.inputEnabled = true;
	game.add.existing(this)
};

Bomb.prototype = Object.create(Phaser.Sprite.prototype);
Bomb.prototype.constructor = Bomb;

Bomb.prototype.setupBody = function() {
	this.body.collideWorldBounds = true;
    this.body.bounce.setTo(0.9, 0.9);

    var randomAngle = this.game.rnd.pick(BombProperties.bombRandomStartingAngleRight.concat(BombProperties.bombRandomStartingAngleLeft));
	this.body.velocity.x = Math.cos(randomAngle) * BombProperties.bombSpeed;
	this.body.velocity.y = Math.sin(randomAngle) * BombProperties.bombSpeed;
	
};

Bomb.prototype.detonate = function() {
    this.kill();
    var totalWaves = 0;
    var waves = [];
    var speed=300;
    switch (this.type) {
        case BombType.DANGEROUS_BOMB_STRAIGHT_WAVE:
            totalWaves = 4
            waves.push(new Wave(game, this.x, this.y, 0,speed,90));
            waves.push(new Wave(game, this.x, this.y, 0,-speed,270));
            waves.push(new Wave(game, this.x, this.y, speed,0,0));
            waves.push(new Wave(game, this.x, this.y, -speed,0,180));
            break;
        case BombType.DANGEROUS_BOMB_DIAGONAL_WAVE:
            totalWaves = 4
            waves.push(new Wave(game, this.x, this.y, speed,speed,45));
            waves.push(new Wave(game, this.x, this.y, -speed,-speed,225));
            waves.push(new Wave(game, this.x, this.y, speed,-speed,315));
            waves.push(new Wave(game, this.x, this.y, -speed,speed,135));
            break;
        case BombType.DANGEROUS_BOMB_EIGHT_WAVE:
            totalWaves = 8
            waves.push(new Wave(game, this.x, this.y, 0,speed,90));
            waves.push(new Wave(game, this.x, this.y, 0,-speed,270));
            waves.push(new Wave(game, this.x, this.y, speed,0,0));
            waves.push(new Wave(game, this.x, this.y, -speed,0,180));
            waves.push(new Wave(game, this.x, this.y, speed,speed,45));
            waves.push(new Wave(game, this.x, this.y, -speed,-speed,225));
            waves.push(new Wave(game, this.x, this.y, speed,-speed,315));
            waves.push(new Wave(game, this.x, this.y, -speed,speed,135));
            break;
        case BombType.SAFE_BOMB:
            totalWaves = 0
            break;
    }
    return waves;
}