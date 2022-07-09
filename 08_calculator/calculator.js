const add = (a,b) => a+b;

const subtract = (a,b) => a-b;

const sum = (a) => a.reduce((a, b) => a + b, 0);

const multiply = (a) => a.reduce((a, b) => a*b, 1);

const power = (a,b) => a**b;

const factorial = num => {
  if (num === 0) return 1;
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
