const palindrome = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('palindrome("hello") should return false', function () {
    assert.equal(palindrome('hello'), false)
  });

  it('palindrome("world") should return false', function () {
    assert.equal(palindrome('world'), false)
  });

  it('palindrome("mom") should return true', function () {
    assert.equal(palindrome('mom'), true)
  });

  it('palindrome("131") should return true', function () {
    assert.equal(palindrome('131'), true)
  });
});