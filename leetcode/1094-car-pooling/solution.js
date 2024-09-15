/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let furthest = 0;

  for (const trip of trips) furthest = Math.max(furthest, trip[2] + 1);

  const passengers = new Array(furthest).fill(0);

  for (const trip of trips) {
    passengers[trip[1]] += trip[0]; // pick-up
    passengers[trip[2]] -= trip[0]; // drop-off
  }

  let curr = 0;
  for (let i = 0; i <= furthest; i++) {
    curr += passengers[i];

    if (curr > capacity) {
      return false;
    }
  }

  return true;
};
