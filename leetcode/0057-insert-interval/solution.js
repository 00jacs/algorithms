/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let left = 0;
  let right = intervals.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (intervals[mid][0] <= newInterval[0]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  // console.log('index that we found: ', left);
  intervals.splice(left, 0, newInterval);
  // console.log('after insertion: ', intervals);

  const merged = [[intervals[0][0], intervals[0][1]]];

  for (let i = 1; i < intervals.length; i++) {
    // do they overlap if start == end
    if (intervals[i][0] <= merged[merged.length - 1][1]) {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        intervals[i][1]
      ); // merge
    } else {
      merged.push([...intervals[i]]);
    }
  }

  return merged;
};
