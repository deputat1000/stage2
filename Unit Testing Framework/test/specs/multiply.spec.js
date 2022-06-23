const Calculator = require('../../app/calculator.js');
const {expect} = require('chai');

describe('multiply', () => {
  let calculator;

  before(() => calculator = new Calculator());

  it('should return 10 when called with numbers 2 and 5',
      () => expect(calculator.multiply(2, 5)).to.be.equal(10));

  after(() => calculator = null);
});

