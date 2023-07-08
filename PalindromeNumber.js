let x = 121;

let isPalindrome = function (x) {
  let reverse = Number(String(x).split("").reverse().join(""));

  if (x === reverse) {
    return true;
  } else {
    return false;
  }
};

let result = isPalindrome(x);
console.log(result);
