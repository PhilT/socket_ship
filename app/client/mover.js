'use strict';

module.exports.mover = {
  direction_x: 0,
  direction_y: 0,

  move: function move(x, y) {
    if (outsideCanvas()) return;

    self.x += x;
    self.y += y;
  },

  rotate: function rotate(direction) {
    self.direction += direction;
  }


};