bool check(vector<int>& nums, int threshold, int divisor) {
    unsigned long sum = 0;

    for (double num : nums) {
        sum += (int)ceil(num / divisor);
    }

    // printf("calculated sum %ld\n", sum);
    return sum <= threshold;
}

int smallestDivisor(vector<int>& nums, int threshold) {
    int left = 1;
    int right = 2 * pow(10, 6) + 1;

    int ans = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (check(nums, threshold, mid)) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
}