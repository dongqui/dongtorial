const arrayWithFunc = require('./20');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('arrayWithFunc([1, 2, 3], function(num){return num * 2}) should return [2, 4, 6]', function () {
    assert.deepEqual(arrayWithFunc([1, 2, 3], function(num){return num * 2}), [2, 4, 6])
  });

  it('arrayWithFunc([1, 2, 3], function(num){return num + 2}) should return [3, 4, 5]', function () {
    assert.deepEqual(arrayWithFunc([1, 2, 3], function(num){return num + 2}), [3, 4, 5])
  });
});