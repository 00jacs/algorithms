function combinationSum3(k: number, n: number): number[][] {
  const ans: number[][] = [];

  function backtrack(
    curr: number[],
    currentSum: number,
    nextStart: number
  ): boolean {
    if (curr.length == k && currentSum == n) {
      ans.push([...curr]);
      return true;
    } else if (curr.length == k) {
      return false;
    }

    // console.log(`curr: ${curr}; nextStart: ${nextStart};`)

    // @microoptimization: look into a shorter loop depending on currSum - n
    for (let i = nextStart; i <= 9; i++) {
      if (currentSum + i > n) {
        continue;
      }

      backtrack([...curr, i], currentSum + i, i + 1);
    }

    return false;
  }

  backtrack([], 0, 1);
  return ans;
}
