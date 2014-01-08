'use strict';

var fake = require('minifake').fake,
    expect = require('minifake').expect,
    mover = require('../lib/mover.js');

describe('mover', function () {
  var subject;

  beforeEach(function () {
    subject = mover();
  });

  it('moves', function () {
    expect(subject.direction_x).to.equal(0);
  });

});
