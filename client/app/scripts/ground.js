window.Ground = (function() {
	'use strict';

    var TOTALWIDTH = 106.1; // image is 37 pixels wide, width of gamecanvas is 1024 pixels
    var WIDTH = 3.7;
	var HEIGHT = 12.8;
    var SPEED = 30;
    var moved = false;
    var move = 0;

    var Ground = function(el, game) {
        this.el = el;
        this.game = game;
        this.posX = 0;
    };

    Ground.prototype.reset = function() {
        this.posX = 0;
    };

    /*Ground.prototype.moveGround = function() {
        this.posX -= WIDTH;

        this.el.css('transform', 'translate(' + this.posX + 'em, 0em');

        this.reset();
    }*/

    Ground.prototype.stopMove = function() {
        document.getElementById("Ground").style.animation = "none";
    };

    Ground.prototype.onFrame = function(delta) {        
        document.getElementById("Ground").style.animation = "groundmove 0.12s linear infinite";
        
        //this.move = delta * SPEED * 10;
        //document.getElementById("Ground").style.animation = "groundmove"+move+"s linear infinite";
        /*this.posX -= delta * SPEED;
        console.log(this.posX);

        this.checkOutOfBounds();

        this.el.css('transform', 'translate(' + this.posX + 'em, 0 em)');*/

        
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

        //this.el.css('transform', 'translateX(' + this.pos.x + 'em)');
        //this.el.css('animation', 'groundmove ' + delta*30 + 's linear infinite');*/
    };

    /*Ground.prototype.checkOutOfBounds = function() {
        if(this.posX < -37) {
            console.log("PosX less");
            this.posX = 0;
        }
    };*/

    return Ground;

})();