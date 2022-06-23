const Calculator = require('../../app/calculator.js');
const {expect} = require('chai');

describe('add', () => {
  let calculator;

  before(() => calculator = new Calculator());

  it('should return 5 when called with numbers 2 and 3',
      () => expect(calculator.add(2, 3)).to.be.equal(5));

  after(() => calculator = null);
});
