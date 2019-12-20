const reverseWord = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('reverseWord("hello") should return "olleh"', function () {
    assert.equal(reverseWord('hello'), 'Hello')
  });

  it('reverseWord("world") should return "dlrow', function () {
    assert.equal(reverseWord('world'), 'dlrow')
  });
});