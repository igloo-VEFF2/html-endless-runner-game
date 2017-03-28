window.Pipes = (function() {
	'use strict';

	// All these constants are in em's, multiply by 10 pixels
	// for 1024x576px canvas.
	var SPEED = 30; // * 10 pixels per second
	var WIDTH = 5;
	var HEIGHT = 5;
	var INITIAL_POSITION_X = 40;
	var INITIAL_POSITION_Y = 20;
	var fallSpeed = 0.02;

	var Pipes = function(el, game) {
		this.el = el;
		this.game = game;
		this.pos = { x: 0, y: 0 };
	};

	/**
	 * Resets the state of the player for a new game.
	 */
	/*Pipes.prototype.reset = function() {
		this.pos.x = INITIAL_POSITION_X;
		this.pos.y = INITIAL_POSITION_Y;
	};*/

	Pipes.prototype.onFrame = function(delta) {

		/*fallSpeed += 0.02;									//Increases falling speed with each passed frame

		if(Controls._didJump)
		{
			this.pos.y -= delta * SPEED * 6.5;				//Player jumps if space was pressed or LMB clicked
			fallSpeed = 0;
			Controls._didJump = false;
		}
		else									
			this.pos.y += delta * SPEED * fallSpeed;		//Moves player down if key up is not pressed

	//	this.checkCollisionWithBounds();*/

		// Update UI
		this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
	};

	return Pipes;

})();
