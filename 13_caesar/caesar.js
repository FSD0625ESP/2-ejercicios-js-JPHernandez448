const caesar = function (str, shift) {
  shift = shift % 26;

  return str
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/)) {
        let code = char.charCodeAt(0) - 97;
        code = (code + shift + 26) % 26;
        return String.fromCharCode(code + 97);
      } else if (char.match(/[A-Z]/)) {
        let code = char.charCodeAt(0) - 65;
        code = (code + shift + 26) % 26;
        return String.fromCharCode(code + 65);
      } else {
        return char;
      }
    })
    .join("");
};

// Do not edit below this line
module.exports = caesar;
