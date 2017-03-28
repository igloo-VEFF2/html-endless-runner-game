
window.Controls = (function() {
    'use strict';
    /**
     * A singleton class which abstracts all player input,
     * should hide complexity of dealing with keyboard, mouse
     * and touch devices.
     * @constructor
     */
    var Controls = function() {
        this._didJump = false;
        this.keys = {};
        $(window)
            .on('keydown', this._onKeyDown.bind(this))
            .on('mousedown', this._onMouseDown.bind(this))
    };

    Controls.prototype._onMouseDown = function(e) {
        if(e.which === 1)
            this._didJump = true;
    }

    Controls.prototype._onKeyDown = function(e) {
            if(e.keyCode == 32)
                this._didJump = true;
    }
    // Export singleton.
    return new Controls();
})();
