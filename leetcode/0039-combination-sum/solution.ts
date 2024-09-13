function combinationSum(candidates: number[], target: number): number[][] {
  function backtrack(path: number[], start: number, currentSum: number) {
    if (currentSum === target) {
      return ans.push([...path]);
    }

    for (let i = start; i < candidates.length; i++) {
      if (currentSum + candidates[i] <= target) {
        path.push(candidates[i]);
        backtrack(path, i, currentSum + candidates[i]);
        path.pop();
      }
    }
  }

  const ans: number[][] = [];
  backtrack([], 0, 0);
  return ans;
}
