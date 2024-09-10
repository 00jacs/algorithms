int partitionArray(vector<int>& nums, int k) {
    sort(nums.begin(), nums.end());

    int ans = 1;
    int prev = nums[0];
    for (int i = 1; i < nums.size(); i++) {
        if (nums[i] - prev > k) {
            ans++;
            prev = nums[i];
        }
    }

    return ans;
}