Animate.ProjectileSequence = function (options) {
    Animate.Sequence.call(this, options);
    this.position1 = new Animate.Vector2();
    this.position2 = new Animate.Vector2();
    this.velocity = new Animate.Vector2();
    this.acceleration = new Animate.Vector2();
    this.lastTime = 0;
};

Animate.ProjectileSequence.prototype = new Animate.Sequence();
Animate.ProjectileSequence.base = Animate.Sequence.prototype;
Animate.ProjectileSequence.prototype.constructor = Animate.ProjectileSequence;

Animate.ProjectileSequence.prototype.reset = function(element) {
    Animate.ProjectileSequence.base.reset.call(this, element);
    if ( this.options ) {
        if ( this.options.acceleration && this.options.acceleration.x !== undefined ) {
            this.acceleration.x = this.options.acceleration.x/1e6;
        }
        if ( this.options.acceleration && this.options.acceleration.y !== undefined ) {
            this.acceleration.y = this.options.acceleration.y/1e6;
        }
        if ( this.options.velocity && this.options.velocity.x !== undefined ) {
            this.velocity.x = this.options.velocity.x;
        }
        if ( this.options.velocity && this.options.velocity.y !== undefined ) {
            this.velocity.y = this.options.velocity.y;
        }
        if ( this.options.from && this.options.from.x !== undefined ) {
            this.position1.x = this.options.from.x;
        }
        if ( this.options.from && this.options.from.y !== undefined) {
            this.position1.y = this.options.from.y;
        }
        if ( this.options.to && this.options.to.x !== undefined ) {
            this.position2.x = this.options.to.x;
        }
        if ( this.options.to && this.options.to.y !== undefined ) {
            this.position2.y = this.options.to.y;
        }
    }
};

Animate.ProjectileSequence.prototype.update = function(element, time) {
    Animate.ProjectileSequence.base.update.call(this, element, time);

    if ( this.active && this.lastTime !== 0 ) {

        var dt = time - this.lastTime;
        this.position1.x += (this.velocity.x) * dt;
        this.position1.y += (this.velocity.y) * dt;

        if ( element.style.transform ) {
            var start = element.style.transform.indexOf('translate');
            var end = element.style.transform.indexOf(')', start);
            element.style.transform = element.style.transform.substr(0,start)+"translate(" + this.position1.x + "px ," + this.position1.y + "px)"+element.style.transform.substr(end+1);
        } else {
            element.style.transform = "translate(" + this.position1.x + "px ," + this.position1.y + "px)";
        }

        this.velocity.x = this.velocity.x + this.acceleration.x * dt;
        this.velocity.y = this.velocity.y + this.acceleration.y * dt;

    }

    this.lastTime = time;
};