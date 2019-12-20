const sumAll = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('sumAll(1, 10) should return 55', function () {
    assert.equal(sumAll(1, 10), 55)
  });

  it('sumAll(5, 5) should return 5', function () {
    assert.equal(sumAll(5, 5), 5)
  });

  it('sumAll(4, 425) should return 90519', function () {
    assert.equal(sumAll(4, 425), 90519)
  });
});