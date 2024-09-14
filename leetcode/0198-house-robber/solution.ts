function rob(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }

  if (nums.length == 2) {
    return Math.max(nums[0], nums[1]);
  }

  let dp = Array.from({ length: nums.length + 1 }, () => 0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  dp[2] = Math.max(nums[0] + nums[2], nums[1]);

  for (let i = 3; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
}
