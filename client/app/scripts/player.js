window.Player = (function() {
	'use strict';

	var Controls = window.Controls;

	// All these constants are in em's, multiply by 10 pixels
	// for 1024x576px canvas.
	var SPEED = 30; // * 10 pixels per second
	var WIDTH = 5;
	var HEIGHT = 5;
	var INITIAL_POSITION_X = 10;
	var INITIAL_POSITION_Y = 20;
	var fallSpeed = 0.02;

	var Player = function(el, game) {
		this.width = WIDTH;
		this.height = HEIGHT;
		this.el = el;
		this.game = game;
		this.pos = { x: 0, y: 0 };
	};

	/**
	 * Resets the state of the player for a new game.
	 */
	Player.prototype.reset = function() {
		this.pos.x = INITIAL_POSITION_X;
		this.pos.y = INITIAL_POSITION_Y;
	};

	Player.prototype.onFrame = function(delta) {

		fallSpeed += 0.02;									//Increases falling speed with each passed frame

		if(Controls._didJump)
		{
			this.pos.y -= delta * SPEED * 6.5;				//Player jumps if space was pressed or LMB clicked
			fallSpeed = 0;
			Controls._didJump = false;
		}
		else									
			this.pos.y += delta * SPEED * fallSpeed;		//Moves player down if key up is not pressed

		this.checkCollisionWithBounds();
		this.checkCollisionWithPipes();

		console.log(this.game.pipeTop.height);
		console.log(this.game.pipeTop.width);

		// Update UI
		this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
	};

	Player.prototype.checkCollisionWithBounds = function() {
		if (this.pos.y < 0 ||
			this.pos.y + HEIGHT > this.game.WORLD_HEIGHT) {
			fallSpeed = 0.02;
			return this.game.gameover();
		}
	};


	Player.prototype.checkCollisionWithPipes = function() {
    if (this.game.pipeTop.pos.x < this.pos.x + this.width &&
        this.game.pipeTop.pos.x + this.game.pipeTop.width > this.width &&
        this.game.pipeTop.pos.y < this.pos.y + this.height &&
        this.game.pipeTop.height + this.game.pipeTop.pos.y > this.pos.y)
			 return this.game.gameover();

	 if (this.game.pipeBottom.pos.x < this.pos.x + this.width &&
        this.game.pipeBottom.pos.x + this.game.pipeBottom.width > this.width &&
        this.game.pipeBottom.pos.y < this.pos.y + this.height &&
        this.game.pipeBottom.height + this.game.pipeBottom.pos.y > this.pos.y)
			 return this.game.gameover();
	};

	return Player;

})();
