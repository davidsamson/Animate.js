var Animate = function() {
    this.animations = [];
};

Animate.clone = function(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        return obj.slice(0);
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = Animate.clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
};


Animate.prototype.update = function () {
    var now = window.performance.now();
    requestAnimationFrame(_AnimateUpdate);
    for(var a=0; a<this.animations.length; a++) {
        this.animations[a].update(now);
    }
};

Animate.prototype.addAnimation = function(animation) {
    this.animations.push(animation);
    this.update();
    return window.performance.now();
};

var _Animate = new Animate();
var _AnimateUpdate = function() {
    _Animate.update();
};




