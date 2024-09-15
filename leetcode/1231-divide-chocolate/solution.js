/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
var maximizeSweetness = function (sweetness, k) {
  if (k + 1 > sweetness.length) {
    return -1;
  }

  let low = Infinity;
  let high = 1;

  for (const sweet of sweetness) {
    low = Math.min(low, sweet);
    high += sweet;
  }

  /**
   * @param {number} val
   * @return {boolean}
   */
  function check(val) {
    let peopleWithChocolate = 0;
    let currentSweetness = 0;

    for (const sweet of sweetness) {
      currentSweetness += sweet;
      if (currentSweetness >= val) {
        peopleWithChocolate++;
        currentSweetness = 0;
      }
    }

    if (peopleWithChocolate >= k + 1) {
      return true;
    }

    return false;
  }

  while (low < high) {
    const mid = low + Math.floor(high - low + 1) / 2;

    if (check(mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  return high;
};
