const isSameString = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('isSameString("ABC", "DCF") should return false', function () {
    assert.equal(isSameString('ABC', 'DCF'), false)
  });

  it('isSameString("hello", "hello") should return true', function () {
    assert.equal(isSameString('hello', 'hello'), true)
  });
});