const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const {expect} = require('chai');
chai.use(spies);

describe(`verify`, () => {
  let calculator;
  let spy;

  beforeEach(() => {
    calculator = new Calculator();
    spy = chai.spy.on(calculator, 'verify');
  });

  afterEach(() => calculator = null);

  it(`should return undefined when called with numbers`,
      () => expect(calculator.verify(2, 3)).to.be.equal(undefined));

  it(`should throw an error if provided with a non-numbered parameter`,
      () => {
        const callWithError = () => calculator.verify(2, false);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`There is a non-numbered parameter!`);
      });
});
