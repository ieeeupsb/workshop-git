var calc = require('../src/calc');

// multiplication func tests

exports.testPositiveNumbers = function(test) {
  test.equal(calc.mult(2, 3), 6);
  test.equal(calc.mult(2, 0), 0);
  test.notEqual(calc.mult(1, 7), 14);

  test.done();
}

exports.testNegativeNumbers = function(test) {
  test.equal(calc.mult(2, -3), -6);
  test.notEqual(calc.mult(-4, -3), -12);

  test.done();
}
