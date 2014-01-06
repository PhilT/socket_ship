'use strict';

var colourFunctions = {
  toString: function toString() {
    return 'hsla(' + this.hue + ', ' + this.saturation + '%, ' + this.light + '%, ' + this.alpha + ')';
  },

  shift: function shift(amount) {
    this.hue = this.limit(this.hue + amount, 0, 360);
    return this;
  },

  saturate: function saturate(amount) {
    this.saturation = this.limit(this.saturation + amount);
    return this;
  },

  lighten: function lighten(amount) {
    this.light = this.limit(this.light + amount);
    return this;
  },

  darken: function darken(amount) {
    return this.lighten(-amount);
  },

  transparentize: function transparentize(amount) {
    this.alpha = this.limit(this.alpha - amount, 0, 1);
    return this;
  },

  limit: function limit(amount, min, max) {
    min = min || 0;
    max = max || 100;
    return amount < min ? min : amount > max ? max : amount;
  }

};

module.exports = function hsla(hue, saturation, light, alpha) {
  var self = Object.create(colourFunctions),
      nameToHue;

  nameToHue = function nameToHue(name) {
    return ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta', 'red'].indexOf(name) * 60;
  };

  self.hue = parseInt(hue, 10) || nameToHue(hue);
  self.saturation = saturation;
  self.light = light;
  self.alpha = alpha;

  return self;
};
