/* eslint-disable require-jsdoc */
class Calculator {
  constructor() {}

  verify(a, b) {
    const typeOfA = typeof a;
    const typeOfB = typeof b;

    if (typeOfA !== 'number' || typeOfB !== 'number') {
      throw new Error('There is a non-numbered parameter!');
    }
  }

  add(a, b) {
    this.verify(a, b);
    return a + b;
  }

  multiply(a, b) {
    this.verify(a, b);
    return a * b;
  }
}

module.exports = Calculator;
