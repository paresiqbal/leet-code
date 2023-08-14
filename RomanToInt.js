// Check for the value of roman numbe

s = "XI";

let romantToInt = function (s) {
  symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  value = 0;

  for (let i = 0; i < s.length - 1; i++) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }

  return value + symbols[s[s.length - 1]];
};

let result = romantToInt(s);
console.log(result);
