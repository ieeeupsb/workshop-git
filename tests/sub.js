var calc = require('../src/calc');

// subtraction func tests

exports.testPositiveNumbers = function(test) {
  test.equal(calc.sub(2, 3), -1);
  test.notEqual(calc.sub(1, 7), 6);

  test.done();
}

exports.testNegativeNumbers = function(test) {
  test.equal(calc.sub(2, -3), 5);
  test.notEqual(calc.sub(-4, -3), 0);

  test.done();
}
