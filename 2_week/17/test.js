const findTheOldest = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('findTheOldest({\n' +
    '  Emma: 71,\n' +
    '  Jack: 45,\n' +
    '  Amy: 15,\n' +
    '  Ben: 29\n' +
    '}) should return "Emma"', function () {
    assert.equal(findTheOldest({
      Emma: 71,
      Jack: 45,
      Amy: 15,
      Ben: 29
    }), "Emma")
  });

  it('findTheOldest({\n' +
    '  Max: 9,\n' +
    '  Josh: 13,\n' +
    '  Sam: 48,\n' +
    '  Anne: 33\n' +
    '}) should return "Sam', function () {
    assert.equal(findTheOldest({
      Max: 9,
      Josh: 13,
      Sam: 48,
      Anne: 33
    }), "Sam")
  });
});