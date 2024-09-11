function countComponents(n: number, edges: number[][]): number {
  const graph = Array.from({ length: n }, () => []);

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }

  const seen = Array.from({ length: n }, () => false);
  let ans = 0;

  function dfs(root: number) {
    seen[root] = true;

    for (let i = 0; i < graph[root].length; i++) {
      if (!seen[graph[root][i]]) {
        dfs(graph[root][i]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      ans++;
      dfs(i);
    }
  }

  return ans;
}
