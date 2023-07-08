let nums = [2, 7, 11, 15];
let target = 9;

let twosum = function (nums, target) {
  let record = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (record.has(target - nums[i])) {
      return [record.get(target - nums[i]), i];
    } else {
      record.set(nums[i], i);
    }
  }
  return [];
};

let result = twosum(nums, target);
console.log(result);
