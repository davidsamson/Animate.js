Animate.ScaleSequence = function (options) {
    Animate.Sequence.call(this, options);
    this.s1 = 1;
    this.s2 = 1;
}

Animate.ScaleSequence.prototype = new Animate.Sequence();
Animate.ScaleSequence.base = Animate.Sequence.prototype;
Animate.ScaleSequence.prototype.constructor = Animate.ScaleSequence;

Animate.ScaleSequence.prototype.reset = function(element) {
    Animate.ScaleSequence.base.reset.call(this, element);
    if ( this.options ) {
        if ( this.options.to !== undefined ) {
            this.s2 = this.options.to;
        }
        if ( this.options.from !== undefined ) {
            this.s1 = this.options.from;
        }
    }

    this.ds = this.s2 - this.s1;
}

Animate.ScaleSequence.prototype.update = function(element, time) {
    Animate.ScaleSequence.base.update.call(this, element, time);
    if ( this.active ) {

        var s = (this.ds/this.dt)*(time) + this.s1 - (this.ds/this.dt)*this.t1;

        if ( element.style.transform ) {
            var start = element.style.transform.indexOf('scale');
            var end = element.style.transform.indexOf(')', start);
            if ( start === -1 ) {
                element.style.transform += " scale(" + s + ")";
            } else {
                element.style.transform = element.style.transform.substr(0,start)+"scale(" + s + ")"+element.style.transform.substr(end+1);
            }
        } else {
            element.style.transform = "scale(" + s + ")";
        }
    }
}