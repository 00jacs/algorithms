vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
    priority_queue<pair<double, vector<int>>> pq;

    for (int i = 0; i < points.size(); i++) {
        double dist = sqrt(points[i][0] * points[i][0] + points[i][1] * points[i][1]);
        pq.push(make_pair(dist, points[i]));

        if (pq.size() > k) {
            pq.pop();
        }
    }

    vector<vector<int>> ans;

    while(pq.size()) {
        ans.push_back(pq.top().second);
        pq.pop();
    }

    return ans;
}