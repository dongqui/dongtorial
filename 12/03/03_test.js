const areaOfSquare = require('./03');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('areaOfSquare(2, 4) should return 8', function () {
    assert.equal(areaOfSquare(2, 4), 8)
  });

  it('areaOfSquare(3, 6) should return 18', function () {
    assert.equal(areaOfSquare(3, 6), 18)
  });
});