window.Pipes = (function() {
	'use strict';

	// All these constants are in em's, multiply by 10 pixels
	// for 1024x576px canvas.
	var SPEED = 30; // * 10 pixels per second
	var WIDTH = 21.5;
	var HEIGHT = 40;
	var INITIAL_POSITION_X = 110;
	var INITIAL_POSITION_Y = Math.floor((Math.random() *(-8 - -30)) - 30);		//Randomly generates the y of a pipe

	var Pipes = function(el, game) {
		this.width = WIDTH;
		this.height = HEIGHT;
		this.el = el;
		this.game = game;
		this.pos = { x: 0, y: 0 };
		this.gap = this.game.el.find('.Gap'), this;
		this.gap.pos = { x: this.pos.x+5, y: 0};
		this.gapTouched = false;												//Used for checking if bird passed between pipes
	};

	Pipes.prototype.reset = function() {
		this.pos.x = INITIAL_POSITION_X;
		this.pos.y  = Math.floor((Math.random() * (-8 - -30)) - 30);				//Randomly generates the y of a pipe
		this.gap.pos = { x: this.pos.x+5, y: 0};
		this.gapTouched = false;
	};

	Pipes.prototype.onFrame = function(delta) {

		this.game.pipeBottom.pos.y = this.pos.y + 26;							//Sets the gap between top and bottom pipe
		this.pos.x -= delta * SPEED;											//Sets the movement of the pipes
		this.gap.pos.x -= delta * SPEED;
		
		this.checkIfOutOfBounds();

		// Update UI
		this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');			//Pipes movement
		this.gap.css('transform', 'translate(' + this.gap.pos.x + 'em, ' + this.gap.pos.y + 'em)');	//Gap movement
	};

	Pipes.prototype.checkIfOutOfBounds = function() {
		if (this.pos.x < -30)
		{
			this.pos.x = INITIAL_POSITION_X;									//If the pipes go out of screen, move to right
			this.pos.y  = Math.floor((Math.random() *(-8 - -30)) - 30);			//Generates the y coordinate of the pipes
			this.gap.pos.x = INITIAL_POSITION_X+5;
			this.gapTouched = false;
		}
	};

	return Pipes;
})();
