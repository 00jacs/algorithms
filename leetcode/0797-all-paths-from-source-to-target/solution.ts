function dfs(
  root: number,
  graph: number[][],
  curr: number[],
  ans: number[][]
): void {
  if (root == graph.length - 1) {
    ans.push([...curr]);
    return;
  }

  for (const neighbour of graph[root]) {
    curr.push(neighbour);
    dfs(neighbour, graph, curr, ans);
    curr.pop();
  }
}

function allPathsSourceTarget(graph: number[][]): number[][] {
  const ans: number[][] = [];
  const curr: number[] = [0];

  dfs(0, graph, curr, ans);
  return ans;
}
