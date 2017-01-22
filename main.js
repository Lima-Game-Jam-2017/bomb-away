var game = new Phaser.Game("100%", "100%", Phaser.AUTO, 'game', { init: init, preload: preload, create: create, update: update, resize: resize });

function init() {
    console.log("init");
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignVertically = true;
    game.scale.setScreenSize(true);
}

function preload() {

}

function create() {

}

function update() {

}

function resize() {

}

Main = function() {}

Main.prototype = {
	preload: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.load.script('Splash', 'states/splash.js');
	},

	create: function() {
		game.state.add('Splash', Splash);
		game.state.start('Splash');
	}
};

game.state.add('Main', Main);
game.state.start('Main');