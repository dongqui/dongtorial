const sumOfArr = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('sumOfArr([1, 2, 3, 4, 5]) should return 15', function () {
    assert.equal(sumOfArr([1, 2, 3, 4, 5]), 15)
  });

  it('sumOfArr([1, 2]) should return 3', function () {
    assert.equal(sumOfArr([1, 2]), 3)
  });
});