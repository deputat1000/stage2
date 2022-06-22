/**
 * A class containing addition and multiplication methods
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {}

  /**
   * @param {*} a to verify
   * @param {*} b to verify
   * @memberof Calculator
   */
  verify(a, b) {
    const typeOfA = typeof a;
    const typeOfB = typeof b;

    if (typeOfA !== 'number' || typeOfB !== 'number') {
      throw new Error(`There is a non-numbered parameter!`);
    }
  }

  /**
   * @param {Number} a to add
   * @param {Number} b to add
   * @return {Number} addition result
   * @memberof Calculator
   */
  add(a, b) {
    this.verify(a, b);
    return a + b;
  }

  /**
   * @param {Number} a to multiply
   * @param {Number} b to multiply
   * @return {Number} multiplication result
   * @memberof Calculator
   */
  multiply(a, b) {
    this.verify(a, b);
    return a * b;
  }
}

module.exports = Calculator;
