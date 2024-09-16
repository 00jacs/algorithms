/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const isLetter = (letter) => {
    return letter.toUpperCase() != letter.toLowerCase();
  };

  const arr = new Array(s.length).fill('');

  const freeSpots = [];
  for (let i = 0; i < s.length; i++) {
    if (!isLetter(s[i])) {
      arr[i] = s[i];
    } else {
      freeSpots.push(i);
    }
  }

  // console.log(freeSpots);

  let freeSpotIdx = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (isLetter(s[[i]])) {
      arr[freeSpots[freeSpotIdx++]] = s[i];
    }
  }

  return arr.join('');
};
