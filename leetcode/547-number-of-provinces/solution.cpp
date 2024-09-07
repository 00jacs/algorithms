void dfs(int root, vector<vector<int>>& is_connected, vector<bool>& seen) {
    seen[root] = true;

    for (int i = 0; i < is_connected.size(); i++) {
        if (is_connected[root][i] && !seen[i]) {
            dfs(i, is_connected, seen);
        }
    }
}

int findCircleNum(vector<vector<int>>& is_connected) {
    int n = is_connected.size();
    int ans = 0;

    vector<bool> seen(n, false);

    for (int i = 0; i < n; i++) {
        if (!seen[i]) {
            ans++;
            dfs(i, is_connected, seen);
        }
    }

    return ans;
}