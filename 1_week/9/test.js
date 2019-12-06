const findA = require('./problem');
const { describe } = require('mocha');
const assert = require('chai').assert;

describe('test', function () {
  it('findA("BBBBABBB") should return 4', function () {
    assert.equal(findA("BBBBABBB"), 4)
  });

  it('findA("BABBBBB") should return 1', function () {
    assert.equal(findA("BABBBBB"), 1)
  });
});