Animate.Vector2 = function (x, y) {
    this.x = 0;
    this.y = 0;
    if ( x ) {
        this.x = x;
    }
    if ( y ) {
        this.y = y;
    }
}

Animate.Vector2.prototype.constructor = Animate.Vector2;

