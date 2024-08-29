int countElements(vector<int>& arr) {
    unordered_set<int> s(arr.begin(), arr.end());
    int ans = 0;

    for (int num : arr) {
        if (s.find(num + 1) != s.end()) {
            ans++;
        }
    }

    return ans;
}
