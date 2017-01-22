var Splash = function() {};

Splash.prototype = {

	loadScripts: function() {
		game.load.script('wave_object', 'objects/wave.js');
		game.load.script('bomb_object', 'objects/bomb.js');
		game.load.script('game_state', 'states/game.js');
		game.load.script('menu_state', 'states/mainMenu.js')
		game.load.script('config', 'objects/config.js');
	},


	loadImages: function() {
		game.load.image('straight_img', 'assets/straight.png');
		game.load.image('diagonal_img', 'assets/diagonal.png');
		game.load.image('eight_img', 'assets/morado.png');
		game.load.image('safe_img', 'assets/safe.png');
		game.load.image('wave_img', 'assets/black.png');
	},

	loadFonts: function(){
		game.load.bitmapFont('carrier_command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
	},

	init: function() {
		
	},

	preload: function() {
		this.loadScripts();
		this.loadImages();
		this.loadFonts();
	},

	addGameStates: function() {
		game.state.add("MainMenu", MainMenu);
		game.state.add("Game", Game);
		//game.state.add("GameOver", GameOver);
		//game.state.add("Credits", Credits);
	},

	create: function() {
		this.addGameStates();

		setTimeout(function() {
			game.state.start("MainMenu");
		}, 1000);
	}
};