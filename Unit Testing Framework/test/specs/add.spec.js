const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const {expect} = require('chai');
chai.use(spies);

describe(`add`, () => {
  let calculator;
  let spy;

  beforeEach(() => {
    calculator = new Calculator();
    spy = chai.spy.on(calculator, 'add');
  });

  afterEach(() => calculator = null);

  it(`should return 5 when called with numbers 2 and 3`,
      () => expect(calculator.add(2, 3)).to.be.equal(5));

  it(`should throw an error if provided with a non-numbered parameter`,
      () => {
        const callWithError = () => calculator.add(2, false);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`There is a non-numbered parameter!`);
      });
});
