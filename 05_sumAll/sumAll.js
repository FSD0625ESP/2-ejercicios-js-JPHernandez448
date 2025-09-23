const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return "ERROR";
  }

  let start = Math.min(a, b);
  let end = Math.max(a, b);
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
