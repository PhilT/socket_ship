'use strict';

var fake = require('minifake').fake,
    expect = require('minifake').expect,
    mover = require('../lib/mover.js');

describe('object', function () {
  describe('.render', function () {
    it('renders', function () {
      context = fake('CanvasRenderingContext2D', {ordered: true});

      expect(context).to.receive('save');
      expect(context).to.receive('fillStyle');
      expect(context).to.receive('');
      expect(context).to.receive('');
      expect(context).to.receive('');
      expect(context).to.receive('restore');
    });
  });
});

