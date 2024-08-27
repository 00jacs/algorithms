function waysToSplitArray(nums: number[]): number {
  const prefix: number[] = Array.from({ length: nums.length });
  prefix[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }

  let ans = 0;

  // "i" here is going to be our pivot point
  for (let i = 1; i < nums.length; i++) {
    const leftSum = prefix[i - 1];
    const rightSum = prefix[nums.length - 1] - leftSum;

    if (leftSum >= rightSum) {
      ans++;
    }
  }

  return ans;
}
