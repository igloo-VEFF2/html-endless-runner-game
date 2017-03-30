
window.Game = (function() {
	'use strict';

	/**
	 * Main game class.
	 * @param {Element} el jQuery element containing the game.
	 * @constructor
	 * 
	 */
	var flapSound = new sound("../assets/flapSound.mp3");
	var scoreSound = new sound("../assets/scoreSound.mp3");
	var deathSound = new sound("../assets/deathSound.mp3");
	var music = new sound('../assets/bensound-jazzcomedy.mp3');
	var isMuted = false;

	var Game = function(el) {
		this.el = el;
		this.player = new window.Player(this.el.find('.Player'), this);
		this.pipeTop = new window.Pipes(this.el.find('.PipeTop'), this);
		this.pipeBottom = new window.Pipes(this.el.find('.PipeBottom'), this);
		this.ground = new window.Ground(this.el.find('.Ground'), this);
		this.background = new window.Background(this.el.find('.Background'), this);
		this.isPlaying = false;
		this.muteImg = this.el.find('.Mute');

		// Cache a bound onFrame since we need it each frame.
		this.onFrame = this.onFrame.bind(this);
	};

	document.getElementById("Mute").onclick = function(e) {
		if(isMuted) {
			document.getElementById("Mute").style.background = "url('../assets/soundOn.png') no-repeat";
			//playSound("music");
		}
		else {
			document.getElementById("Mute").style.background = "url('../assets/soundOff.png') no-repeat";
			music.stop();
		}
		document.getElementById("Mute").style.backgroundSize = "50px 50px";
		isMuted = !isMuted;
	}

	/**
	 * Runs every frame. Calculates a delta and allows each game
	 * entity to update itself.
	 */
	Game.prototype.onFrame = function() {
		// Check if the game loop should stop.
		if (!this.isPlaying) {
			this.ground.stopMove();
			this.background.stopMovement();
			return;
		}

		// Calculate how long since last frame in seconds.
		var now = +new Date() / 1000,
				delta = now - this.lastFrame;
		this.lastFrame = now;

		// Update game entities.
		this.player.onFrame(delta);
		this.pipeTop.onFrame(delta);
		this.pipeBottom.onFrame(delta);
		this.ground.onFrame(delta);

		this.background.startMovement();

		// Request next frame.
		window.requestAnimationFrame(this.onFrame);
	};

	/**
	 * Starts a new game.
	 */
	Game.prototype.start = function() {
		this.reset();

		// Restart the onFrame loop
		this.lastFrame = +new Date() / 1000;
		window.requestAnimationFrame(this.onFrame);
		this.isPlaying = true;

		this.playSound("music");
	};

	/**
	 * Resets the state of the game so a new game can be started.
	 */
	Game.prototype.reset = function() {
		this.player.reset();
		this.pipeTop.reset();
		this.pipeBottom.reset();
		this.ground.reset();
		this.background.reset();
	};

	/**
	 * Signals that the game is over.
	 */
	Game.prototype.gameover = function() {
		this.isPlaying = false;
		this.playSound("death");
		var playerAnim = this.el.find('.Player').addClass('Player-dead');

		var that = this;
		var scoreboardEl = this.el.find('.Scoreboard');
		scoreboardEl
			.addClass('is-visible')
			.find('.Scoreboard-restart')
				.one('click', function() {
					scoreboardEl.removeClass('is-visible');
					playerAnim.removeClass('Player-dead');
					that.start();
				});
	};

	Game.prototype.playSound = function(src) {
		if(!isMuted)
		{
			if(src === "flap")
				flapSound.play();
			if(src === "score")
				scoreSound.play();
			if(src === "death")
				deathSound.play();
			if(src === "music")
				music.play();
		}
	};

	function sound(src) {
		this.sound = document.createElement("audio");
		this.sound.src = src;
		this.sound.setAttribute("preload", "auto");
		this.sound.setAttribute("controls", "none");
		this.sound.style.display = "none";
		document.body.appendChild(this.sound);
		this.play = function(){
			this.sound.play();

		}
		this.stop = function(){
			this.sound.pause();
    }
}

	/**
	 * Some shared constants.
	 */
	Game.prototype.WORLD_WIDTH = 102.4;
	Game.prototype.WORLD_HEIGHT = 57.6;

	return Game;
})();


