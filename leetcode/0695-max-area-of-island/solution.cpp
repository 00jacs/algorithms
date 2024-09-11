int dfs(int row, int col, vector<vector<int>>& grid, vector<vector<bool>>& seen) {
    const int m = grid.size();
    const int n = grid[0].size();

    seen[row][col] = true;

    vector<vector<int>> directions = { {1, 0}, {0, 1}, {-1, 0}, {0, -1} };
    int island_size = 0;

    for (int i = 0; i < directions.size(); i++) {
        int new_row = row + directions[i][0];
        int new_col = col + directions[i][1];

        if (new_row < 0 || new_row >= m || new_col < 0 || new_col >= n) {
            continue;
        }

        if (grid[new_row][new_col] == 1 && !seen[new_row][new_col]) {
            island_size += dfs(new_row, new_col, grid, seen);
        }
    }

    return island_size + 1;
}

int maxAreaOfIsland(vector<vector<int>>& grid) {
    const int m = grid.size();
    const int n = grid[0].size();

    vector<vector<bool>> seen(m, vector<bool>(n, false));

    int max_area = 0;

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 1 && !seen[i][j]) {
                max_area = max(max_area, dfs(i, j, grid, seen));
            }
        }
    }

    return max_area;
}