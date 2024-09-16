/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let prefix = 0;
  let ans = 0;

  for (let i = 0; i < gain.length; i++) {
    prefix += gain[i];
    ans = Math.max(ans, prefix);
  }

  return ans;
};
