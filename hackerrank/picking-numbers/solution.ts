function pickingNumbers(a: number[]): number {
  const results: number[] = Array.from({ length: 101 }, () => 0);
  let max_result = 0;

  for (let i = 0; i < a.length; i++) {
    results[a[i]]++;
    results[a[i] - 1]++;
    max_result = Math.max(max_result, results[a[i]], results[a[i] - 1]);
  }

  return max_result;
}
