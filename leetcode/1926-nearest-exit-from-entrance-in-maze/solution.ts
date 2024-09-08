function nearestExit(maze: string[][], entrance: number[]): number {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ] as const;

  const n = maze.length; // rows
  const m = maze[0].length; // cols

  function isValid(_row: number, _col: number) {
    if (_row < 0 || _row >= n) return false;
    if (_col < 0 || _col >= m) return false;

    return true;
  }

  const seen = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => false)
  );

  let queue: number[][] = [entrance];
  let steps = 0;

  while (queue.length) {
    steps++;
    const nextQueue: number[][] = [];

    for (let i = 0; i < queue.length; i++) {
      const curr = queue[i];

      seen[curr[0]][curr[1]] = true;

      for (let j = 0; j < directions.length; j++) {
        const newRow = curr[0] + directions[j][0];
        const newCol = curr[1] + directions[j][1];

        if (
          isValid(newRow, newCol) &&
          maze[newRow][newCol] == '.' &&
          !seen[newRow][newCol]
        ) {
          if (
            steps > 0 &&
            (newRow == 0 || newRow == n - 1 || newCol == 0 || newCol == m - 1)
          ) {
            return steps;
          }

          seen[newRow][newCol] = true;
          nextQueue.push([newRow, newCol]);
        }
      }
    }

    queue = nextQueue;
  }

  return -1;
}
