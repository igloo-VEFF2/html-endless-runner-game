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
        this.posX = 0;
    };

    Ground.prototype.onFrame = function(delta) {
        //this.posX -= delta * SPEED + 3.7;
        this.posX -= (delta * 100)/2;

        this.el.css('transform', 'translate(' + this.posX + 'em, 0em');
        this.reset();
        //var id = setInterval(frame, delta);
        /*function frame() {
            if (this.posX === -37)
            {
                clearInterval(id);
            }
            else {
                posX--;
                this.el.css('left', + this.posX + 'em');
            }

        }*/
        //this.pos.x -= delta * SPEED;

        //this.el.css('transform', 'translate(' + this.pos.x + 'em, 0 em)');

        //this.el.css('transform', 'translateX(' + this.pos.x + 'em)');
        //this.el.css('animation', 'groundmove ' + delta*30 + 's linear infinite');
    };

    return Ground;

})();