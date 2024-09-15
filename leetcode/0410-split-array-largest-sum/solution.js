/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  let left = 0;
  let right = 1;

  for (const num of nums) {
    left = Math.max(left, num);
    right += num;
  }

  function check(val) {
    let segmentsCount = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > val) {
        return false;
      }

      if (sum !== 0 && sum + nums[i] > val) {
        sum = 0;
        segmentsCount++;
        i--;
      } else {
        sum += nums[i];
      }
    }

    if (sum !== 0) {
      sum = 0;
      segmentsCount++;
    }

    return segmentsCount <= k;
  }

  /**
   * We can do this in linear search (O(n^2)):
   * for (let i = left; i <= right; i++) {
   *    if (check(i)) {
   *       return i;
   *   }
   * }
   */

  /**
   * Binary search will find an answer in O(n log n);
   */
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (check(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return right;
};
