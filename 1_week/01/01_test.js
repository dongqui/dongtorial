const helloWorld = require('./01');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('helloWorld() should return "hello"', function () {
    assert.typeOf(helloWorld(), 'hello')
  })

});