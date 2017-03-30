window.Background = (function() {
    'use strict';

    var Background = function(el, game) {
        this.el = el;
        this.game = game;
        this.hills = this.el.find('.Background-hills');
        this.mountains = this.el.find('.Background-mountains');
    };

    Background.prototype.startMovement = function() {
        this.hills.css('animation', 'movehills 7s linear infinite');
        this.mountains.css('animation', 'movemountains 20s linear infinite');
    }

    Background.prototype.stopMovement = function() {
        this.hills.css('animation-play-state', 'paused');
        this.mountains.css('animation-play-state', 'paused');
    }

    Background.prototype.reset = function() {
        this.hills.css('animation', 'none');
        this.mountains.css('animation', 'none');
    }

    return Background;

})();