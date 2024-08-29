function largestUniqueNumber(nums: number[]): number {
  const counts: number[] = Array.from<number>({ length: 1001 }).fill(0);

  for (const num of nums) {
    counts[num]++;
  }

  let max_num = -1;

  for (let i = 0; i <= 1000; i++) {
    if (counts[i] == 1) {
      max_num = Math.max(max_num, i);
    }
  }

  return max_num;
}
