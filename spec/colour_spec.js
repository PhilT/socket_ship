'use strict';

var fake = require('minifake').fake,
    expect = require('minifake').expect,
    hsla = require('../lib/colour.js');

describe('colour', function () {
  var subject;

  beforeEach(function () {
    subject = hsla(120, 50, 60, 1);
  });

  it('converts colour names to correct hue', function () {
    subject = hsla('cyan', 50, 60, 1);
    expect(subject.toString()).to.equal('hsla(180, 50%, 60%, 1)');
  });

  describe('toString', function () {
    it('converts to a valid hsla string', function () {
      expect(subject.toString()).to.equal('hsla(120, 50%, 60%, 1)');
    });
  });

  describe('shift', function () {
    it('shifts hue', function () {
      expect(subject.shift(5).toString()).to.equal('hsla(125, 50%, 60%, 1)');
    });
  });

  describe('saturate', function () {
    it('saturates colour', function () {
      expect(subject.saturate(5).toString()).to.equal('hsla(120, 55%, 60%, 1)');
    });

    it('limits saturation when below zero', function () {
      expect(subject.saturate(-60).toString()).to.equal('hsla(120, 0%, 60%, 1)');
    });

    it('limits saturation when above 100', function () {
      expect(subject.saturate(60).toString()).to.equal('hsla(120, 100%, 60%, 1)');
    });
  });

  describe('lighten', function () {
    it('lightens colour', function () {
      expect(subject.lighten(5).toString()).to.equal('hsla(120, 50%, 65%, 1)');
    });

    it('limits lightness when below 0', function () {
      expect(subject.lighten(-70).toString()).to.equal('hsla(120, 50%, 0%, 1)');
    });

    it('limits lightness when above 100', function () {
      expect(subject.lighten(50).toString()).to.equal('hsla(120, 50%, 100%, 1)');
    });
  });

  describe('darken', function () {
    it('darkens colour', function () {
      expect(subject.darken(5).toString()).to.equal('hsla(120, 50%, 55%, 1)');
    });

    it('limits lightness when below 0', function () {
      expect(subject.darken(70).toString()).to.equal('hsla(120, 50%, 0%, 1)');
    });

    it('limits lightness when above 100', function () {
      expect(subject.darken(-50).toString()).to.equal('hsla(120, 50%, 100%, 1)');
    });
  });

  describe('transparentize', function () {
    it('make hsla more transparent', function () {
      expect(subject.transparentize(0.2).toString()).to.equal('hsla(120, 50%, 60%, 0.8)');
    });

    it('limits alpha when below 0', function () {
      expect(subject.transparentize(1.1).toString()).to.equal('hsla(120, 50%, 60%, 0)');
    });

    it('limits alpha when above 1', function () {
      expect(subject.transparentize(-1).toString()).to.equal('hsla(120, 50%, 60%, 1)');
    });
  });
});
