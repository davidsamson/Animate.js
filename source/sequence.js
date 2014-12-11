Animate.Sequence = function (options) {
    this.t1 = 0;
    this.t2 = 0;
    this.active = false;
    this.options = Animate.clone(options);
}

Animate.Sequence.prototype.constructor = Animate.Sequence;

Animate.Sequence.prototype.reset = function(element) {
    if ( this.options ) {
        if ( this.options.hasOwnProperty('end') ) {
            this.t2 = this.options.end;
            if ( this.options.hasOwnProperty('start') ) {
                this.t1 = this.options.start;
            }
        }
    }
    this.dt = (this.t2 - this.t1);
}

Animate.Sequence.prototype.update = function(element, time) {
    if ( time >= this.t1 && time < this.t2 ) {
        this.active = true;
    } else {
        this.active = false;
    }
}

