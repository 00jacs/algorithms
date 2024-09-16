/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = s.split(' ');

  let result = '';
  for (let j = 0; j < words.length; j++) {
    for (let i = words[j].length - 1; i >= 0; i--) result += words[j][i];

    if (j < words.length - 1) {
      result += ' ';
    }
  }

  return result;
};
