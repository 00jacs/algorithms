bool check(vector<int>& nums, int threshold, int divisor) {
    unsigned long sum = 0;

    for (double num : nums) {
        // printf("adding to sum: %d\n", (int)ceil(num / divisor));
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
        // printf("left = %d; right = %d; testing out divisor: %d\n", left, right, mid);

        if (check(nums, threshold, mid)) {
            // printf("- correct; updating ans to: %d\n", right);
            ans = mid;
            right = mid - 1;
        } else {
            // printf("- incorrect; updating left to %d\n", mid + 1);
            left = mid + 1;
        }
    }

    return ans;
}