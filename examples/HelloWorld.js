var hwAnimate = new Animate.Animation(document.getElementById('hello_world'));

hwAnimate.addSequence(new Animate.TransformSequence({ from: {x:0,  y:0},   to: { x:250,y:300}, start:0,      end:7500}))
         .addSequence(new Animate.TransformSequence({ from: {x:250,y:300}, to: { x:500,y:0},   start:7500,   end:15000}))
         .addSequence(new Animate.ScaleSequence(    { from: 1,             to: 0.5,            start:5000,   end: 10000}))
         .addSequence(new Animate.ScaleSequence(    { from: 0.5,           to: 1,              start:10000,  end: 15000}))
         .addSequence(new Animate.Rotate3DSequence( { from: { x:0 },       to: {x:345},        start:3000,   end:12000}))
         .addSequence(new Animate.Rotate3DSequence( { from: { x:345 },     to: {x:0},          start:12000,  end:15000}))
         .start();

var vtAnimate = new Animate.Animation(document.getElementById('svg_test'));

vtAnimate.addSequence(new Animate.Rotate3DSequence(  {from: {y:0},         to: {y:360},        start:0,      end:15000 }))
         .addSequence(new Animate.ProjectileSequence( { velocity:{x:0.05}, acceleration:{x:-1,y:8}, start:0, end:15000} ))
         .start();