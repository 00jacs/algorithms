function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  /**
   * Builds a graph representation of the input edges.
   * @returns a graph representation of the edges
   */
  function buildGraph() {
    const graph: number[][] = Array.from({ length: n }, () => []);

    for (let i = 0; i < edges.length; i++) {
      graph[edges[i][0]].push(edges[i][1]);
      graph[edges[i][1]].push(edges[i][0]);
    }

    return graph;
  }

  const graph = buildGraph();
  const seen = Array.from({ length: n }).fill(false);

  /**
   * Depth-first search from the root node.
   * @param root
   * @returns {boolean} true if we can reach the destination from the root node
   */
  let ans = false;
  function dfs(root: number) {
    seen[root] = true;

    if (root == destination || ans) {
      return true;
    }

    for (let i = 0; i < graph[root].length; i++) {
      if (!seen[graph[root][i]]) {
        ans = ans || dfs(graph[root][i]);
      }
    }

    return ans;
  }

  // let's run DFS from our source node
  return dfs(source);
}
