int dfs(int root, vector<vector<int>>& graph, vector<bool>& seen) {
    seen[root] = true;
    int visited = 0;

    for (int i = 0; i < graph[root].size(); i++) {
        if (!seen[graph[root][i]]) {
            visited += dfs(graph[root][i], graph, seen);
        }
    }

    return visited + 1;
}

int reachableNodes(int n, vector<vector<int>>& edges, vector<int>& restricted) {
    vector<vector<int>> graph(n + 1, vector<int>());
    unordered_set<int> restricted_set(begin(restricted), end(restricted));

    for (int i = 0; i < edges.size(); i++) {
        if (restricted_set.find(edges[i][0]) != restricted_set.end() || restricted_set.find(edges[i][1]) != restricted_set.end()) {
            continue;
        }

        graph[edges[i][0]].push_back(edges[i][1]);
        graph[edges[i][1]].push_back(edges[i][0]);
    }

    vector<bool> seen(n, false);

    return dfs(0, graph, seen);
}