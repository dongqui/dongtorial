const isOdd = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('isOdd(3) should return true', function () {
    assert.equal(isOdd(3), true)
  });

  it('isOdd(2) should return false', function () {
    assert.equal(isOdd(2), false)
  });
});