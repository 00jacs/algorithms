function findMaxLength(nums: number[]): number {
  const m = new Map<number, number>();

  let sum = 0;
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] == 0 ? -1 : 1;
    // console.log(`i = ${i}; sum = ${sum};`);

    if (sum == 0) {
      ans = Math.max(ans, i + 1);
    } else if (m.has(sum)) {
      // console.log('- m has sum: ', m.get(sum));
      ans = Math.max(ans, i - m.get(sum));
    } else {
      m.set(sum, i);
    }

    // console.log(`- ans after iteration: ${ans}`);
  }

  return ans;
}
