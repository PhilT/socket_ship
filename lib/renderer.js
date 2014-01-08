'use strict';

var rendererFunctions = {
  render: function render(func) {
    context.save();
    func.call(this);
    context.restore();
  }
}

module.exports = function renderer(context) {
  var self = Object.create(rendererFunctions);

  self.context = context;
}
