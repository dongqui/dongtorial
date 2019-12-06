const isSpace = require('./10');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('isSpace("helloworld") should return false', function () {
    assert.equal(isSpace('helloworld'), false)
  });

  it('isSpace("hello world") should return true', function () {
    assert.equal(isSpace('hello world'), true)
  });
});