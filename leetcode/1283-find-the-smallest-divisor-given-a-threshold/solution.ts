function check(nums: number[], threshold: number, divisor: number): boolean {
  let sum = 0;

  for (const num of nums) {
    sum += Math.ceil(num / divisor);
  }

  return sum <= threshold;
}

function smallestDivisor(nums: number[], threshold: number): number {
  let left = 1;
  let right = 2 * Math.pow(10, 6) + 1;
  let ans = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (check(nums, threshold, mid)) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}
