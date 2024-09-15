/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let xor = x ^ y; // now we only have differing bits
  let dist = 0;

  while (xor != 0) {
    // if the least meaningful bit is 1
    // our number is even
    if (xor % 2 == 1) dist += 1;
    xor = xor >> 1;
  }

  return dist;
};
