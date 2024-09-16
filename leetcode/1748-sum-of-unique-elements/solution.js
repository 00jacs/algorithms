/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const counts = new Array(101).fill(0);

  for (const num of nums) {
    counts[num]++;
  }

  let sum = 0;
  for (let num = 0; num <= 100; num++) {
    if (counts[num] === 1) sum += num;
  }

  return sum;
};
