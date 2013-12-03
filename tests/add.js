var calc = require('../src/calc');

// addition func tests

exports.testPositiveNumbers = function(test) {
  test.equal(calc.add(2, 3), 5);
  test.notEqual(calc.add(1, 7), 5);

  test.done();
}

exports.testNegativeNumbers = function(test) {
  test.equal(calc.add(2, -3), -1);
  test.notEqual(calc.add(-4, -3), -1);

  test.done();
}


exports.testFloatNumbers = function(test) {
  test.equal(calc.add(2.24, 4.6), 6.84);
  test.notEqual(calc.add(13.284, -3.5), 10);

  test.done();
}
