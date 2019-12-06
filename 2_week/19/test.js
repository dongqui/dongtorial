const checkEquals = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('checkEquals([1, 2], [1, 3]) should return false', function () {
    assert.equal(checkEquals([1, 2], [1, 3]), false)
  });

  it('checkEquals([1, 2], [1, 3]) should return false', function () {
    assert.deepEqual(checkEquals([1, 2], [1, 3]), false)
  });

  it('checkEquals([1, 2], [1, 2]) should return true', function () {
    assert.equal(checkEquals([1, 2], [1, 2]), false)
  });

  it('checkEquals([1, 2], [1, 2]) should return true', function () {
    assert.deepEqual(checkEquals([1, 2], [1, 2]), true)
  });
});