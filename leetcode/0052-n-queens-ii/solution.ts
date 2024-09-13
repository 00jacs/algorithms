function totalNQueens(n: number): number {
  let solutions = 0;

  function backtrack(
    row: number,
    colVisited: Set<number>,
    diagVisited: Set<number>,
    antiDiagVisited: Set<number>
  ) {
    if (row == n) {
      solutions += 1;
      return;
    }

    for (let newCol = 0; newCol < n; newCol++) {
      const diag = row - newCol;
      const antiDiag = row + newCol;

      if (
        colVisited.has(newCol) ||
        diagVisited.has(diag) ||
        antiDiagVisited.has(antiDiag)
      ) {
        continue;
      }

      colVisited.add(newCol);
      diagVisited.add(diag);
      antiDiagVisited.add(antiDiag);

      backtrack(row + 1, colVisited, diagVisited, antiDiagVisited);

      colVisited.delete(newCol);
      diagVisited.delete(diag);
      antiDiagVisited.delete(antiDiag);
    }
  }

  backtrack(0, new Set<number>(), new Set<number>(), new Set<number>());
  return solutions;
}
