/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length; // rows
  let n = obstacleGrid[0].length; // columns

  if (m === 1 && n === 1) {
    return obstacleGrid[0][0] === 1 ? 0 : 1;
  }

  const dp = new Array(m + 2);

  for (let i = 0; i <= m + 1; i++) {
    dp[i] = new Array(n + 2).fill(0);
  }

  dp[0][0] = 1;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (obstacleGrid[row][col] === 1) {
        continue;
      }

      let uniquePaths = 0;

      if (row - 1 >= 0 && obstacleGrid[row - 1][col] != 1) {
        uniquePaths += dp[row - 1][col];
      }

      if (col - 1 >= 0 && obstacleGrid[row][col - 1] != 1) {
        uniquePaths += dp[row][col - 1];
      }

      dp[row][col] += uniquePaths;
    }
  }

  return dp[m - 1][n - 1];
};
