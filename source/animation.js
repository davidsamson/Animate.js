Animate.Animation = function(element) {
    this.el = element;
    this.sequences = [];
    this.state = 0;
    this.startTime = 0;
};

Animate.Animation.prototype.constructor = Animate.Animation;

Animate.Animation.prototype.addSequence = function(sequence) {
    sequence.reset();
    this.sequences.push(sequence);
    return this;
}

Animate.Animation.prototype.removeSequence = function(sequenceId) {

}

Animate.Animation.prototype.reset = function() {
    for(var s=0; s<this.sequences.length; s++) {
        this.sequences[s].reset(this.el);
    }
}

Animate.Animation.prototype.start = function() {
    this.state = 1;
    this.startTime = _Animate.addAnimation(this);
}

Animate.Animation.prototype.pause = function() {
    this.state = 2;
}

Animate.Animation.prototype.stop = function() {
    this.state = 0;
}

Animate.Animation.prototype.load = function(data) {
    if ( data.sequences ) {
        for(var s=0; s<data.sequences.length; s++) {
            var sequence = data.sequences[s];
            var sequenceObject = null;
            switch(sequence.type) {
                case 'transform':  sequenceObject = new Animate.TransformSequence(sequence); break;
                case 'scale':  sequenceObject = new Animate.ScaleSequence(sequence); break;
                case 'rotate':  sequenceObject = new Animate.RotateSequence(sequence); break;
                case 'rotate3d':  sequenceObject = new Animate.Rotate3DSequence(sequence); break;
                case 'projectile':  sequenceObject = new Animate.ProjectileSequence(sequence); break;
            }
            if (sequenceObject) {
                this.addSequence(sequenceObject);
            }
        }
    }
}

Animate.Animation.prototype.update = function(time) {
    var dt = time - this.startTime;
    for(var s=0; s<this.sequences.length; s++) {
        var sequence = this.sequences[s];
        sequence.update(this.el, dt);
    }
}