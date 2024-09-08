function reachableNodes(
  n: number,
  edges: number[][],
  restricted: number[]
): number {
  const graph = Array.from({ length: n }, () => []);
  const restrictedSet = new Set(restricted);

  for (let i = 0; i < edges.length; i++) {
    if (restrictedSet.has(edges[i][0]) || restrictedSet.has(edges[i][1])) {
      continue;
    }

    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }

  const seen = Array.from({ length: n }, () => false);

  function dfs(root: number) {
    seen[root] = true;
    let visited = 0;

    for (let i = 0; i < graph[root].length; i++) {
      const neighbour = graph[root][i];

      if (!seen[neighbour]) {
        visited += dfs(neighbour);
      }
    }

    return visited + 1;
  }

  return dfs(0);
}
