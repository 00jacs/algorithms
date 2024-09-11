function sortColors(nums: number[]): void {
  const count: number[] = [0, 0, 0];

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }

  let idx = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < count[i]; j++) {
      nums[idx++] = i;
    }
  }
}
