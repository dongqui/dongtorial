const largestNum = require('./13');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('largestNum([1, 2, 3, 4, 5]) should return 5', function () {
    assert.equal(largestNum('[1, 2, 3, 4, 5]'), 5)
  });

  it('largestNum([4, 6, 1, 8, 2]) should return 8', function () {
    assert.equal(largestNum([4, 6, 1, 8, 2]), 8)
  });

  it('largestNum([4, 4, 4, 6, 2]) should return 6', function () {
    assert.equal(largestNum([4, 4, 4, 6, 2]), 6)
  });
});