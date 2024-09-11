function maxAreaOfIsland(grid: number[][]): number {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ];

  const m = grid.length;
  const n = grid[0].length;

  const seen: boolean[][] = Array.from({ length: m }, () =>
    Array.from<boolean>({ length: n }).fill(false)
  );

  let maxArea = 0;

  function dfs(row: number, col: number): number {
    seen[row][col] = true;

    const isValid = (_row: number, _col: number) => {
      if (_row < 0 || _row >= m) return false;
      if (_col < 0 || _col >= n) return false;
      return true;
    };

    let neighbourIslandSize = 0;

    for (let i = 0; i < directions.length; i++) {
      const _row = row + directions[i][0];
      const _col = col + directions[i][1];

      if (isValid(_row, _col) && grid[_row][_col] && !seen[_row][_col]) {
        neighbourIslandSize += dfs(_row, _col);
      }
    }

    return neighbourIslandSize + 1;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] && !seen[i][j]) {
        maxArea = Math.max(maxArea, dfs(i, j));
      }
    }
  }

  return maxArea;
}
