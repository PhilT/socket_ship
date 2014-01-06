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
    var color = hsla(184, 50, 30, 1);

    context.save();
    context.translate(self.x, self.y);
    context.rotate(self.direction);
    context.beginPath();
    context.fillStyle = color.toString();
    context.strokeStyle = color.lighten(10).toString();
    context.shadowBlur = 15;
    context.shadowColor = color.toString();
    context.moveTo(-20, 20);
    context.quadraticCurveTo(-2, 20, 0, -20);
    context.quadraticCurveTo(2, 20, 20, 20);
    context.quadraticCurveTo(0, 35, -20, 20);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
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
