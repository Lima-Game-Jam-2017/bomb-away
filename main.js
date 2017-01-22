var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content',null);

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