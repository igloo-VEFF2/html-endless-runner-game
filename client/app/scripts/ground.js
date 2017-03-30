window.Ground = (function() {
	'use strict';

    var TOTALWIDTH = 106.1; // image is 37 pixels wide, width of gamecanvas is 1024 pixels
    var WIDTH = 3.7;
	var HEIGHT = 12.8;
    var SPEED = 30;

    var Ground = function(el, game) {
        this.el = el;
        this.game = game;
        this.posX = 0;
    };

    Ground.prototype.reset = function() {
        this.pos.x = 0;
        this.pox.y = 0;
    };

    Ground.prototype.onFrame = function(delta) {
        this.pos.x -= delta * SPEED;

        this.el.css('transform', 'translate(' + this.pos.x + 'em, 0 em)');

        //this.el.css('transform', 'translateX(' + this.pos.x + 'em)');
        //this.el.css('animation', 'groundmove ' + delta*30 + 's linear infinite');
    };

    return Ground;

})();