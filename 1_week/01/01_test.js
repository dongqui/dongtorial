const plusNums = require('./01');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('App test!', function () {
  it('input 2, 2 should return 4', function () {
    assert.equal(plusNums(2, 2), 4)
  });
});