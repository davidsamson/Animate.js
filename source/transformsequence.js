Animate.TransformSequence = function (options) {
    Animate.Sequence.call(this, options);
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
}

Animate.TransformSequence.prototype = new Animate.Sequence();
Animate.TransformSequence.base = Animate.Sequence.prototype;
Animate.TransformSequence.prototype.constructor = Animate.TransformSequence;

Animate.TransformSequence.prototype.reset = function(element) {
    Animate.TransformSequence.base.reset.call(this, element);
    if ( this.options ) {
        if ( this.options.from && this.options.from.x != undefined ) {
            this.x1 = this.options.from.x;
        }
        if ( this.options.from && this.options.from.y != undefined ) {
            this.y1 = this.options.from.y;
        }
        if ( this.options.to && this.options.to.x != undefined  ) {
            this.x2 = this.options.to.x;
        }
        if ( this.options.to && this.options.to.y != undefined  ) {
            this.y2 = this.options.to.y;
        }
    }
    this.dx = this.x2 - this.x1;
    this.dy = this.y2 - this.y1;
}

Animate.TransformSequence.prototype.update = function(element, time) {
    Animate.TransformSequence.base.update.call(this, element, time);

    if ( this.active ) {
        var x = (this.dx/this.dt)*time + this.x1 - (this.dx/this.dt)*this.t1;
        var y = (this.dy/this.dt)*time + this.y1 - (this.dy/this.dt)*this.t1;

        if ( element.style.transform ) {
            var start = element.style.transform.indexOf('translate');
            var end = element.style.transform.indexOf(')', start);
            element.style.transform = element.style.transform.substr(0,start)+"translate(" + x + "px ," + y + "px)"+element.style.transform.substr(end+1);
        } else {
            element.style.transform = "translate(" + x + "px ," + y + "px)";
        }
    }
}