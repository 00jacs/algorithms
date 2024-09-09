function maximumDetonation(bombs: number[][]): number {
  const graph: number[][] = Array.from({ length: bombs.length }, () => []);

  // graph[i] - bomb of index i
  for (let i = 0; i < bombs.length; i++) {
    for (let j = i + 1; j < bombs.length; j++) {
      const x1 = bombs[i][0];
      const y1 = bombs[i][1];
      const r1 = bombs[i][2];

      const x2 = bombs[j][0];
      const y2 = bombs[j][1];
      const r2 = bombs[j][2];

      // distance separating the centers
      const d = Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2));

      if (d <= r2) {
        graph[j].push(i);
      }

      if (d <= r1) {
        graph[i].push(j);
      }
    }
  }

  let ans = 1;

  function dfs(bomb: number, visited: Set<number>) {
    let localAns = 1;
    visited.add(bomb);

    for (let i = 0; i < graph[bomb].length; i++) {
      const neighbourExploding = graph[bomb][i];

      if (!visited.has(neighbourExploding)) {
        localAns += dfs(neighbourExploding, visited);
      }
    }

    return localAns;
  }

  for (let i = 0; i < bombs.length; i++) {
    const visited = new Set<number>();
    ans = Math.max(ans, dfs(i, visited));
  }

  return ans;
}
