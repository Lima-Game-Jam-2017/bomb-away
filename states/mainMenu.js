var MainMenu = function(game, parent) {
    Phaser.State.call(this, game, parent);
    this.playText;
    this.creditText;
};

MainMenu.prototype = {

    create: function() {
        //game.add.image(game.world.centerX, game.world.centerY, "main_menu_img").anchor.set(0.5);
        this.background = this.game.add.tileSprite(0,0,800,600,'main_menu_img');

        this.playText = game.add.bitmapText(450, game.world.height /2 + 000, 'carrier_command','PLAY ',30);
        this.playText.inputEnabled = true;
        this.playText.tint = 0x000000;

        this.creditText = game.add.bitmapText(450, game.world.height /2 + 100, 'carrier_command','CREDITS ',30);
        this.creditText.inputEnabled = true;
        this.creditText.tint = 0x000000;

        this.playText.events.onInputDown.add(this.playGame, this);
        this.creditText.events.onInputDown.add(this.playCredits, this);
    },

    update: function() {

    },

    playGame: function() {
        game.state.start("Game");
    },

    playCredits: function() {
        game.state.start("Credits");
    }
};