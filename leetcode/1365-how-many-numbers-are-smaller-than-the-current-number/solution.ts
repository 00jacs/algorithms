function smallerNumbersThanCurrent(nums: number[]): number[] {
  const count_lower = Array.from({ length: 101 }, () => 0);
  const result = Array.from({ length: nums.length }, () => 0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums[i] + 1; j < 101; j++) {
      count_lower[j]++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] = count_lower[nums[i]];
  }

  return result;
}
