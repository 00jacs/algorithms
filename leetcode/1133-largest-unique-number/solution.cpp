int largestUniqueNumber(vector<int> nums) {
    vector<int> freq(1001, 0);
    for (int num : nums) {
        freq[num]++;
    }

    int ans = -1;
    for (int num : nums) {
        if (freq[num] == 1) {
            ans = max(ans, num);
        }
    }

    return ans;
}
