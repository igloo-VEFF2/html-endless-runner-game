window.Pipes = (function() {
	'use strict';

	// All these constants are in em's, multiply by 10 pixels
	// for 1024x576px canvas.
	var SPEED = 30; // * 10 pixels per second
	var WIDTH = 21.5;
	var HEIGHT = 57.6;
	var INITIAL_POSITION_X = 100;
	var INITIAL_POSITION_Y = -5;

	var Pipes = function(el, game) {
		this.width = WIDTH;
		this.height = HEIGHT;
		this.el = el;
		this.game = game;
		this.pos = { x: 0, y: 0 };
	};

	Pipes.prototype.reset = function() {
		this.pos.x = INITIAL_POSITION_X;
		this.pos.y = INITIAL_POSITION_Y;
	};

	Pipes.prototype.onFrame = function(delta) {

		this.pos.x -= delta * SPEED;		
		
		this.checkIfOutOfBounds();

		// Update UI
		this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
	};

	Pipes.prototype.checkIfOutOfBounds = function() {
		if (this.pos.x < -30)
			this.pos.x = 100;
	};

	return Pipes;
})();
