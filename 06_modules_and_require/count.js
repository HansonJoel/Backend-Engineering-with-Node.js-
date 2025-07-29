const counter = function (arr) {
  return `There are  ${arr.length} elements in this array`;
};

const adder = function (a, b) {
  return `The Sum of the 2 numbers are ${a + b}`;
};

const pi = 3.142;

/*
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
*/

module.exports = {
  counter,
  adder,
  pi,
};
