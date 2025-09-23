const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function (...nums) {
  let numbers;
  if (nums.length === 1 && Array.isArray(nums[0])) {
    numbers = nums[0];
  } else {
    numbers = nums;
  }

  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  if (a < 0) return "ERROR";
  let result = 1;
  for (let i = 2; i <= a; i++) {
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
  factorial,
};
