Animate.RotateSequence = function (options) {
    Animate.Sequence.call(this, options);
    this.r1 = 0;
    this.r2 = 0;
}

Animate.RotateSequence.prototype = new Animate.Sequence();
Animate.RotateSequence.base = Animate.Sequence.prototype;
Animate.RotateSequence.prototype.constructor = Animate.RotateSequence;

Animate.RotateSequence.prototype.reset = function(element) {
    Animate.RotateSequence.base.reset.call(this, element);
    if ( this.options ) {
        if ( this.options.from !== undefined ) {
            this.r1 = this.options.from;
        }
        if ( this.options.to !== undefined ) {
            this.r2 = this.options.to;
        }
    }
    this.dr = r2-r1;
}

Animate.RotateSequence.prototype.update = function(element, time) {
    Animate.RotateSequence.base.update.call(this, element, time);
    if ( this.active ) {

        var r = (this.dr/this.dt)*(time) + this.r1 - (this.dr/this.dt)*this.t1;

        if ( element.style.transform ) {
            var start = element.style.transform.indexOf('rotate');
            var end = element.style.transform.indexOf(')', start);
            if ( start === -1 ) {
                element.style.transform += " rotate(" + r + "deg)";
            } else {
                element.style.transform = element.style.transform.substr(0,start)+"rotate(" + r + "deg)"+element.style.transform.substr(end+1);
            }
        } else {
            element.style.transform = "rotate(" + r + "deg)";
        }
    }
}