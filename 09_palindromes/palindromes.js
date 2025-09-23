const palindromes = function (palindromes) {
  let cleanPalindromes = palindromes.toLowerCase();

  cleanPalindromes = cleanPalindromes.replace(/[^a-z0-9]/g, "");

  let reversedPalindromes = cleanPalindromes.split("").reverse().join("");

  return cleanPalindromes === reversedPalindromes;
};

// Do not edit below this line
module.exports = palindromes;
