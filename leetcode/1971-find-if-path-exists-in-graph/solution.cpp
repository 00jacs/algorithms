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