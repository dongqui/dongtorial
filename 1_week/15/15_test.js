const multiplyTwo = require('./15');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('multiplyTwo([1, 2, 3, 4], 2) should return [2, 4, 6, 8]', function () {
    assert.deepEqual(multiplyTwo([1, 2, 3, 4], 2), [2, 4, 6, 8])
  });

  it('multiplyTwo([0, 0, 3, 7], 3) should return [0, 0, 9, 21]', function () {
    assert.deepEqual(multiplyTwo([0, 0, 3, 7], 3), [0, 0, 9, 21])
  });
});