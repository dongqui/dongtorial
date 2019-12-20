const lengthOfString = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it("lengthOfString('hello') should return 4", function () {
    assert.equal(lengthOfString('hello'), 4)
  });

  it("lengthOfString('love you') should return 8", function () {
    assert.equal(lengthOfString('love you'), 8)
  });
});