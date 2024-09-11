vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
    vector<int> count_lower(101, 0);
    vector<int> result(nums.size(), 0);

    for (int i = 0; i < nums.size(); i++) {
        for (int j = nums[i] + 1; j < 101; j++) {
            count_lower[j]++;
        }
    }

    for (int i = 0; i < nums.size(); i++) {
        result[i] = count_lower[nums[i]];
    }

    return result;
}
