window.Pipes = (function() {
	'use strict';

	// All these constants are in em's, multiply by 10 pixels
	// for 1024x576px canvas.
	var SPEED = 30; // * 10 pixels per second
	var WIDTH = 21.5;
	var HEIGHT = 40;
	var INITIAL_POSITION_X = 100;
	var INITIAL_POSITION_Y = Math.floor((Math.random() *(0 - -30)) - 30);		//Randomly generates the y of a pipe
//	var INITIAL_POSITION_Y = -30;

	var Pipes = function(el, game) {
		this.width = WIDTH;
		this.height = HEIGHT;
		this.el = el;
		this.game = game;
		this.pos = { x: 0, y: 0 };
	};

	Pipes.prototype.reset = function() {
		this.pos.x = INITIAL_POSITION_X;
		this.pos.y  = Math.floor((Math.random() * (0 - -30)) - 30);				//Randomly generates the y of a pipe
		
	};

	Pipes.prototype.onFrame = function(delta) {
		this.game.pipeBottom.pos.y = this.pos.y + 26;							//Sets the gap between top and bottom pipe
		this.pos.x -= delta * SPEED;											//Sets the movement of the pipes
		
		this.checkIfOutOfBounds();

		// Update UI
		this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
	};

	Pipes.prototype.checkIfOutOfBounds = function() {
		if (this.pos.x < -30)
		{
			this.pos.x = 100;													//If the pipes go out of screen, move to right
			this.pos.y  = Math.floor((Math.random() *(0 - -30)) - 30);			//Generates the y coordinate of the pipes
		}
	};

	return Pipes;
})();
