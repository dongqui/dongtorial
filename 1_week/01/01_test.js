const addition = require('./01');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('addition(2, 2) should return Number', function () {
    assert.typeOf(addition(2, 2), 'number')
  });

  it('addition(2, 2) should return 4', function () {
    assert.equal(addition(2, 2), 4)
  });

  it('addition(3, 2) should return 5', function () {
    assert.equal(addition(3, 2), 5)
  });
});