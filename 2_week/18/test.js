const alphaFrequencies = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('alphaFrequencies(["a", "b", "b", "c", "a", "a", "d"]) should return {a: 3, b: 2, c: 1, d: 1}', function () {
    assert.deepEqual(alphaFrequencies(['a', 'b', 'b', 'c', 'a', 'a', 'd']), {a: 3, b: 2, c: 1, d: 1})
  });

  it('alphaFrequencies(["f", "x", "x", "x", "g", "z", "x", "z"]) should return [0, 0, 9, 21]', function () {
    assert.deepEqual(alphaFrequencies(["f", "x", "x", "x", "g", "z", "x", "z"]), {f: 1, g: 1, z: 2, x: 4})
  });
});