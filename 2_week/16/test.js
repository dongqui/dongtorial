const sayHello = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('sayHello({ name: "dongjin", age: 12 }  should return "Hello, I\'m dongjin, 12 years old."', function () {
    assert.equal(sayHello({ name: "dongjin", age: 12 }), "Hello, I'm dongjin, 12 years old.")
  });

  it('sayHello({ name: \'IU\', age: 20 }  should return "Hello, I\'m IU, 20 years old."', function () {
    assert.equal(sayHello({ name: 'IU', age: 20 }), "Hello, I'm IU, 20 years old.")
  });
});