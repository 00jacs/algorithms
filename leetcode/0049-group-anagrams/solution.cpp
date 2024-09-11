vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> m;

    for (string str : strs) {
        string sorted = str;
        sort(sorted.begin(), sorted.end());

        if (m.find(sorted) != m.end()) {
            m[sorted].push_back(str);
        } else {
            m[sorted] = { str };
        }
    }

    vector<vector<string>> ans;
    for (auto it : m) {
        ans.push_back(it.second);
    }

    return ans;
}
