void dfs(int root, vector<vector<int>>& graph, vector<bool>& seen) {
    seen[root] = true;

    for (int i = 0; i < graph[root].size(); i++) {
        // graph[root][i] is our neighbour
        if (!seen[graph[root][i]]) {
            dfs(graph[root][i], graph, seen);
        }
    }
}

int countComponents(int n, vector<vector<int>>& edges) {
    vector<vector<int>> graph(n + 1, vector<int>());

    for (int i = 0; i < edges.size(); i++) {
        graph[edges[i][0]].push_back(edges[i][1]);
        graph[edges[i][1]].push_back(edges[i][0]);
    }

    vector<bool> seen(n, false);
    int ans = 0;

    for (int i = 0; i < n; i++) {
        if (!seen[i]) {
            ans++;
            dfs(i, graph, seen);
        }
    }

    return ans;
}