'use strict';

var hsla = require('./colour.js'),
    ship;

ship = {
  move: function move(x, y) {
    this.x += x;
    this.y += y;
  },

  rotate: function rotate(direction) {
    this.direction += direction;
  },

  draw: function draw() {
    var renderer = require('./renderer.js'),
        color = hsla(184, 50, 30, 1);

    // this was after beginPath but I think it can go before
    context.fillStyle = color.toString();
    context.strokeStyle = color.lighten(10).toString();
    context.shadowBlur = 15;
    context.shadowColor = color.toString();

    context.beginPath();
    //moveTo, quadraticCurveTo, etc
    context.closePath();
    context.fill();
    context.stroke();

    path: [
      {move: [-20, 20]},
      {quadratic: [-2, 20, 0, -20]},
      {quadratic: [2, 20, 20, 20]},
      {quadratic: [0, 35, -20, 20]},
      {options: {
        close: true,
        fill: color.toString(),
        stroke: color.lighten(10).toString(),
        shadow: {
          size: 15,
          color: color.toString()
        }
      }}
    ]


  }
};

module.exports = function mover(context) {


  return {
    speed: 0,
    thrust: 0,
    direction: 0,
    position: 0,
    color: 0,

  };
};
