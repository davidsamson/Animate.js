var testSequence = {
    sequences:
[
    {type: 'transform', from: {x:0,   y:0},   to: { x:250, y:300},  start:0,      end:7500},
    {type: 'transform', from: {x:250, y:300}, to: { x:500, y:0},    start:7500,   end:15000},
    {type: 'scale',     from: 1,              to: 2.5,              start:5000,   end:10000},
    {type: 'scale',     from: 2.5,            to: 1,                start:10000,  end:15000},
    {type: 'rotate3d',  from: { x:0, y:0, z:0 },   to: {x:345, y:180, z:45},   start:3000,   end:12000},
    {type: 'rotate3d',  from: { x:345, y:180, z:45 }, to: {x:0, y:0, z:0},     start:12000,  end:15000}
]};

var hwAnimate = new Animate.Animation(document.getElementById('hello_world'));

hwAnimate.load(testSequence).start();

