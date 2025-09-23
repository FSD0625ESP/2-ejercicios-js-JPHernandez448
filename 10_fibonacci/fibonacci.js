const fibonacci = function (n) {
  n = parseInt(n, 10);

  if (n <= 0) {
    return "OOPS";
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  let prev1 = 1,
    prev2 = 1,
    current;

  for (let i = 3; i <= n; i++) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
