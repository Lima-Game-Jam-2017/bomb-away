var Credits = function(game, parent) {
    Phaser.State.call(this, game, parent);
    this.playText;
    this.creditText;
};

Credits.prototype = {

    create: function() {

        this.background = this.game.add.tileSprite(0,0,800,600,'credits_img');

        //(game.world.centerX, game.world.centerY, "credits_img").anchor.set(0.5);
        this.menuText = game.add.bitmapText(50, 500, 'carrier_command','Main Menu ',30);
        this.menuText.inputEnabled = true;


        this.menuText.events.onInputDown.add(this.menuClick, this);
    },

    update: function() {

    },

    menuClick: function(){
        game.state.start("MainMenu");
    }
};