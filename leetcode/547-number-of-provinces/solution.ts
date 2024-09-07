function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const seen: boolean[] = Array.from<boolean>({ length: n + 1 }).fill(false);

  function dfs(root: number): void {
    seen[root] = true;

    for (let i = 0; i < n; i++) {
      if (isConnected[root][i] && !seen[i]) {
        dfs(i);
      }
    }
  }

  let ans = 0;

  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      ans++;
      dfs(i);
    }
  }

  return ans;
}
