const sayHello = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('sayHello("Marie") should return "Hello, Marie"', function () {
    assert.equal(sayHello('Marie'), 'Hello, Marie')
  });

  it('areaOfSquare("Jake") should return "Hello, Jake"', function () {
    assert.equal(sayHello('Jake'), 'Hello, Jake')
  });
});