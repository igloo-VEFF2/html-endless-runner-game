window.Ground = (function() {
	'use strict';

    var TOTALWIDTH = 106.1; // image is 37 pixels wide, width of gamecanvas is 1024 pixels
    var WIDTH = 3.7;
	var HEIGHT = 12.8;

    var Ground = function(el, game) {
        this.el = el;
        this.game = game;
    };

    Ground.prototype.reset = function() {

    };

    Ground.prototype.onFrame = function(delta) {
        this.el.css('transform', 'translateX('+ this.WIDTH +'em)');
    };

    return Ground;

})();