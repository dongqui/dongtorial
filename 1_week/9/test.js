const startWithCapital = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('startWithCapital("hello") should return "Hello"', function () {
    assert.equal(startWithCapital('hello'), 'Hello')
  });

  it('startWithCapital("world") should return "World', function () {
    assert.equal(startWithCapital('world'), 'World')
  });
});