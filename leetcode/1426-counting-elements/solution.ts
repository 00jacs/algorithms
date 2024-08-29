function countElements(arr: number[]): number {
  const s: Set<number> = new Set(arr);
  let ans: number = 0;

  for (const num of arr) {
    if (s.has(num + 1)) {
      ans++;
    }
  }

  return ans;
}
