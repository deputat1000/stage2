const Calculator = require('../../app/calculator.js');
const {expect} = require('chai');

describe('verify', () => {
  let calculator;

  before(() => calculator = new Calculator());

  it('should return undefined when called with numbers',
      () => expect(calculator.verify(2, 3)).to.be.equal(undefined));

  it('should throw an error if provided with a non-numbered parameter',
      () => {
        const callWithError = () => calculator.verify(2, false);
        expect(callWithError).to.throw('There is a non-numbered parameter!');
      });

  after(() => calculator = null);
});
