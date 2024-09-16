/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const st = [];

  for (const char of s) {
    if (char === '*') st.pop();
    else st.push(char);
  }

  return st.join('');
};
