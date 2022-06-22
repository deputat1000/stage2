const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const {expect} = require('chai');
chai.use(spies);

describe(`multiply`, () => {
  let calculator;
  let spy;

  beforeEach(() => {
    calculator = new Calculator();
    spy = chai.spy.on(calculator, 'multiply');
  });

  afterEach(() => calculator = null);

  it(`should return 10 when called with numbers 5 and 2`,
      () => expect(calculator.multiply(5, 2)).to.be.equal(10));

  it(`should throw an error if provided with a non-numbered parameter`,
      () => {
        const callWithError = () => calculator.multiply(5, false);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`There is a non-numbered parameter!`);
      });
});
