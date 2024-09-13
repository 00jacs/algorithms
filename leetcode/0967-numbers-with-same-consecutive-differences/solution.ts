function numsSameConsecDiff(n: number, k: number): number[] {
  const ans: number[] = [];

  function constructNumber(digits: number[]) {
    let num = 0;

    for (let i = 0; i < digits.length; i++) {
      num += Math.pow(10, digits.length - i - 1) * digits[i];
    }

    return num;
  }

  function backtrack(digits: number[]) {
    if (digits.length == n) {
      // console.log('ans digits: ', digits);
      ans.push(constructNumber(digits));
      return;
    }

    if (digits.length) {
      for (let i = 0; i <= 9; i++) {
        if (Math.abs(i - digits[digits.length - 1]) == k) {
          backtrack([...digits, i]);
        }
      }
    } else {
      for (let i = 1; i <= 5; i++) {
        if (k + i <= 10) {
          backtrack([i]);
        }
      }

      for (let i = Math.max(6, k); i <= 9; i++) {
        backtrack([i]);
      }
    }
  }

  // console.log('construct number: ', constructNumber([1, 2, 3]));

  backtrack([]);
  return ans;
}
