int findMaxLength(vector<int>& nums) {
    int sum = 0;
    int ans = 0;
    map<int, int> idx;

    for (int i = 0; i < nums.size(); i++) {
        sum += nums[i] == 0 ? -1 : 1;

        if (sum == 0) {
            ans = max(ans, i + 1);
        }

        if (idx.find(sum) != idx.end()) {
            ans = max(ans, i - idx[sum]);
        } else {
            idx[sum] = i;
        }
    }

    return ans;
}
