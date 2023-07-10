strs = ["flower", "flow", "flight"];

let commonPrefix = function (strs) {
  let result = "";
  prefix = strs[0];

  for (let i = 0; i < prefix.length; i++) {
    if (strs.some((str) => str[i] !== prefix[i])) {
      break;
    }

    result += prefix[i];
  }

  return result;
};

console.log(commonPrefix(strs));
