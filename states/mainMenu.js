var MainMenu = function(game, parent) {
    Phaser.State.call(this, game, parent);
    this.playText;
    this.creditText;
};

MainMenu.prototype = {

    create: function() {
        this.playText = game.add.bitmapText(100, game.world.height /2 + 100, 'carrier_command','PLAY ',15);
        this.playText.inputEnabled = false;

        this.creditText = game.add.bitmapText(100, game.world.height /2 + 200, 'carrier_command','CREDITS ',15);
        this.creditText.inputEnabled = true;
    },

    update: function() {

    },
};