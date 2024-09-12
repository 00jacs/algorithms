void dfs(int root, vector<vector<int>>& graph, vector<int>& curr, vector<vector<int>>& ans) {
    if (root == graph.size() - 1) {
        ans.push_back(curr);
        return;
    }

    for (int i = 0; i < graph[root].size(); i++) {
        int neighbour = graph[root][i];
        curr.push_back(neighbour);
        dfs(neighbour, graph, curr, ans);
        curr.pop_back();
    }
}

vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph) {
    vector<vector<int>> ans;
    vector<int> curr = {0};

    dfs(0, graph, curr, ans);
    return ans;
}
