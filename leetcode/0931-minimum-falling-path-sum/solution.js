/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;

  const dp = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(n + 1).fill(Infinity);
  }

  let ans = Infinity;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      let minimumSum = row === 0 ? 0 : Infinity;

      if (row > 0 && col > 0) {
        minimumSum = Math.min(minimumSum, dp[row - 1][col - 1]);
      }

      if (row > 0) {
        minimumSum = Math.min(
          minimumSum,
          dp[row - 1][col],
          dp[row - 1][col + 1]
        );
      }

      dp[row][col] =
        row === 0 ? matrix[row][col] : minimumSum + matrix[row][col];
      // console.log(`dp[${row}][${col}] = ${dp[row][col]}`);

      if (row === n - 1) {
        ans = Math.min(ans, dp[row][col]);
      }
    }
  }

  return ans;
};
