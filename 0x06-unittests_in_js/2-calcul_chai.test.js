// 2-calcul_chai.test.js

const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

// Describe the test suite for the 'SUM' operation
describe('calculateNumber - SUM', function() {
  it('should return the sum of two rounded numbers', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 1.5, 3.2)).to.equal(5);
  });
});

// Describe the test suite for the 'SUBTRACT' operation
describe('calculateNumber - SUBTRACT', function() {
  it('should return the difference of two rounded numbers', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
  });
});

// Describe the test suite for the 'DIVIDE' operation
describe('calculateNumber - DIVIDE', function() {
  it('should return the division of two rounded numbers', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.01);
    expect(calculateNumber('DIVIDE', 9.5, 2.4)).to.be.closeTo(5, 0.01);
  });

  it('should return "Error" if the second number rounds to 0', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 9.5, 0.2)).to.equal('Error');
  });
});
