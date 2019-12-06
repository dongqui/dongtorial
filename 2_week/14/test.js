const filterOutString = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('filterOutString([1, 2, "a", "b", 3, 4]) should return [1, 2, 3, 4]', function () {
    assert.deepEqual(filterOutString([1, 2, "a", "b", 3, 4]), [1, 2, 3, 4])
  });

  it('filterOutString([6, "d", 3, "d"]) should return [6, 3]', function () {
    assert.deepEqual(filterOutString([6, "d", 3, "d"]), [6, 3])
  });
});