/**
 * Created by david on 1/1/15.
 */

var svg = document.getElementsByTagName('svg')[0];

for(var i=0;i<50;i++) {
    var el = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    el.setAttributeNS(null, "cx", "0");
    el.setAttributeNS(null, "cy", "0");
    el.setAttributeNS(null, "r", "5");
    el.setAttributeNS(null, "fill", "red");
    el.setAttributeNS(null, "stroke", "black");

    svg.appendChild(el);

    var seq = {sequences: [
        {type: 'projectile', from: {x: Math.random()*1000, y:0}, start: 0, end: 15000, velocity: {y: Math.random()*0.05}, acceleration: {y:1 /*Math.random()*2*/}},
        {type: 'scale', from:1.0, to:0, start:10000, end:15000}
    ]};

    var animate = new Animate.Animation(el);

    animate.load(seq).start();

}

