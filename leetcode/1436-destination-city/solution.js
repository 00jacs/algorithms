/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const map = new Map(); // for each city, track outgoing edges

  for (const path of paths) {
    const from = path[0];
    const to = path[1];

    map.set(from, (map.get(from) || 0) + 1);
    map.set(to, map.get(to) || 0);
  }

  for (const [city, out] of map) {
    if (out === 0) {
      return city;
    }
  }

  return -1;
};
