/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let maxFreq = 0;
  const counts = new Array(101).fill(0);
  let ans = 0;

  for (const num of nums) {
    counts[num]++;

    if (maxFreq === counts[num]) {
      ans += maxFreq;
    } else if (maxFreq < counts[num]) {
      maxFreq = counts[num];
      ans = maxFreq;
    }
  }

  return ans;
};
