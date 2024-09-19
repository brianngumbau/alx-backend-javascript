// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

// Describe the test suite for the 'SUM' operation
describe('calculateNumber - SUM', function() {
  it('should return the sum of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.2), 5);
  });
});

// Describe the test suite for the 'SUBTRACT' operation
describe('calculateNumber - SUBTRACT', function() {
  it('should return the difference of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
  });
});

// Describe the test suite for the 'DIVIDE' operation
describe('calculateNumber - DIVIDE', function() {
  it('should return the division of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 9.5, 2.4), 5);
  });

  it('should return "Error" if the second number rounds to 0', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 9.5, 0.2), 'Error');
  });
});
