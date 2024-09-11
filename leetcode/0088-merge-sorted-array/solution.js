/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0; // pointer to nums1
  let j = 0; // pointer to nums2

  var result = [];
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }

  while (i < m) {
    result.push(nums1[i]);
    i++;
  }

  while (j < n) {
    result.push(nums2[j]);
    j++;
  }

  i = 0;
  while (i < result.length) {
    nums1[i] = result[i];
    i++;
  }

  return;
};
