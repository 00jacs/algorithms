# 1971. Find if path exists in graph

Here's a [link](https://leetcode.com/problems/find-if-path-exists-in-graph/description/) to the problem.

## Problem

Given bidirectional `edges`, `source`, `destination`, return `true` if we can get from `source` to `destination` or `false` if we can't.

---

## Solution

It's a very easy graph problem which we can solve with either DFS or BFS.

1. Let's start by constructing our graph (as always):

```cpp
vector<vector<int>> graph(n + 1, vector<int>());

for (int i = 0; i < edges.size(); i++) {
    graph[edges[i][0]].push_back(edges[i][1]);
    graph[edges[i][1]].push_back(edges[i][0]);
}
```

2. Implement a DFS/BFS and if `root == destination`, return `true`.

Here's a full code in C++:

```cpp
bool dfs(int root, vector<vector<int>>& graph, vector<bool>& seen, int destination, bool &ans) {
    seen[root] = true;

    if (root == destination || ans) {
        ans = true;
        return true;
    }

    for (int i = 0; i < graph[root].size(); i++) {
        if (!seen[graph[root][i]]) {
            ans = ans || dfs(graph[root][i], graph, seen, destination, ans);
        }
    }

    return ans;
}

bool validPath(int n, vector<vector<int>>& edges, int source, int destination) {
    vector<vector<int>> graph(n + 1, vector<int>());

    for (int i = 0; i < edges.size(); i++) {
        graph[edges[i][0]].push_back(edges[i][1]);
        graph[edges[i][1]].push_back(edges[i][0]);
    }

    vector<bool> seen(n, false);
    bool ans = false;

    return dfs(source, graph, seen, destination, ans);
}
```

---

## Analysis

**Problem difficulty**: easy

**Problem type** graphs, DFS, BFS

**Time complexity:** O(n + m)

**Space complexity:** O(n + m)
