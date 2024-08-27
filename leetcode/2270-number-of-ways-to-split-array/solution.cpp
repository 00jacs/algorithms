int waysToSplitArray(vector<int>& nums) {
    if (nums.size() == 0) {
        return 0;
    }

    vector<long long> prefix(nums.size(), 0);
    prefix[0] = nums[0];

    for (int i = 1; i < nums.size(); i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }

    // how many valid splits?
    int ans = 0;

    // is is going to be our "split point"
    for (int i = 1; i < nums.size(); i++) {
        long long left_sum = prefix[i - 1];
        long long right_sum = prefix[nums.size() - 1] - left_sum;

        if (left_sum >= right_sum) {
            ans++;
        }
    }

    return ans;
}
