var Splash = function() {};

Splash.prototype = {

	loadScripts: function() {
		game.load.script('bomb_object', 'objects/bomb.js');
		game.load.script('game_state', 'states/game.js');
		game.load.script('config', 'objects/config.js');
	},

	loadImages: function() {
		game.load.image('bomb_img', 'assets/black.png');
	},

	init: function() {
		
	},

	preload: function() {
		this.loadScripts();
		this.loadImages();
	},

	addGameStates: function() {
		//game.state.add("GameMenu", GameMenu);
		game.state.add("Game", Game);
		//game.state.add("GameOver", GameOver);
		//game.state.add("Credits", Credits);
	},

	create: function() {
		this.addGameStates();

		setTimeout(function() {
			game.state.start("Game");
		}, 1000);
	}
};