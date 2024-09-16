/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const counts = new Array(501).fill(0);
  const candidates = new Set();

  for (const num of arr) {
    counts[num]++;

    if (counts[num] === num) {
      candidates.add(num);
    } else if (counts[num] > num) {
      candidates.delete(num);
    }
  }

  let ans = -1;

  for (const candidate of candidates) {
    if (candidate > ans) {
      ans = candidate;
    }
  }

  return ans;
};
