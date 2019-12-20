const concatStrings = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it("concatStrings('hello', 'world') should return 'hello world'", function () {
    assert.equal(concatStrings('hello', 'world'), 'hello world')
  });

  it("concatStrings('love', ' you') should return 'love you'", function () {
    assert.equal(concatStrings('love', ' you'), 'love you')
  });
});