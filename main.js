var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game'),

gameOptions = { playSound: true, playMusic: true }, musicPlayer, Main = function() {};

Main.prototype = {
	preload: function() {
		game.load.script('Splash', 'states/splash.js');
	},

	create: function() {
		game.state.add('Splash', Splash);
		game.state.start('Splash');
	}
};

game.state.add('Main', Main);
game.state.start('Main');