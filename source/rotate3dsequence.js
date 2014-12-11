Animate.Rotate3DSequence = function (options) {
    Animate.Sequence.call(this, options);
    this.rx1 = 0;
    this.rx2 = 0;
    this.ry1 = 0;
    this.ry2 = 0;
    this.rz1 = 0;
    this.rz2 = 0;
}

Animate.Rotate3DSequence.prototype = new Animate.Sequence();
Animate.Rotate3DSequence.base = Animate.Sequence.prototype;
Animate.Rotate3DSequence.prototype.constructor = Animate.Rotate3DSequence;

Animate.Rotate3DSequence.prototype.reset = function(element) {
    Animate.Rotate3DSequence.base.reset.call(this, element);
    if ( this.options ) {
        if ( this.options.from && this.options.from.x !== undefined ) {
            this.rx1 = this.options.from.x;
        }
        if ( this.options.from && this.options.from.y !== undefined ) {
            this.ry1 = this.options.from.y;
        }
        if ( this.options.from && this.options.from.z !== undefined ) {
            this.rz1 = this.options.from.z;
        }
        if ( this.options.to && this.options.to.x !== undefined ) {
            this.rx1 = this.options.to.x;
        }
        if ( this.options.to && this.options.to.y !== undefined ) {
            this.ry1 = this.options.to.y;
        }
        if ( this.options.to && this.options.to.z !== undefined ) {
            this.rz1 = this.options.to.z;
        }
    }
    this.drx = this.rx2 - this.rx1;
    this.dry = this.ry2 - this.ry1;
    this.drz = this.rz2 - this.rz1;
}

Animate.Rotate3DSequence.prototype.update = function(element, time) {
    Animate.Rotate3DSequence.base.update.call(this, element, time);
    if ( this.active ) {

        var rx = (this.drx/this.dt)*(time) + this.rx1 - (this.drx/this.dt)*this.t1;
        var ry = (this.dry/this.dt)*(time) + this.ry1 - (this.dry/this.dt)*this.t1;
        var rz = (this.drz/this.dt)*(time) + this.rz1 - (this.drz/this.dt)*this.t1;
        var r;

        for(var dim=0; dim<3; dim++) {
            var rotate = 'rotate';
            switch(dim) {
                case 0: rotate += "X"; r = rx; break;
                case 1: rotate += "Y"; r = ry; break;
                case 2: rotate += "Z"; r = rz; break;
            }
            if ( element.style.transform ) {
                var start = element.style.transform.indexOf(rotate);
                var end = element.style.transform.indexOf(')', start);
                if ( start === -1 ) {
                    element.style.transform += " "+rotate+"(" + r + "deg)";
                } else {
                    element.style.transform = element.style.transform.substr(0,start)+rotate+"(" + r + "deg)"+element.style.transform.substr(end+1);
                }
            } else {
                element.style.transform = rotate + "(" + r + "deg)";
            }
        }
    }
}