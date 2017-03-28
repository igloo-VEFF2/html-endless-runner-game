window.Pipes = (function() {
	'use strict';

	// All these constants are in em's, multiply by 10 pixels
	// for 1024x576px canvas.
	var SPEED = 30; // * 10 pixels per second
	var WIDTH = 5;
	var HEIGHT = 5;
	var INITIAL_POSITION_X = 80;
	var INITIAL_POSITION_Y = 35;

	var Pipes = function(el, game) {
		this.el = el;
		this.game = game;
		this.pos = { x: 0, y: 0 };
	};

	Pipes.prototype.reset = function() {
		this.pos.x = INITIAL_POSITION_X;
		this.pos.y = INITIAL_POSITION_Y;
	};

	Pipes.prototype.onFrame = function(delta) {
							
		this.pos.x -= delta * SPEED;		//Moves player down if key up is not pressed

		if(this.pos.x === 10)
		{
			this.pos.x = INITIAL_POSITION_X;
		}


		// Update UI
		this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
	};

	return Pipes;

})();
