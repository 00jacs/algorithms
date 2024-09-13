function generateParenthesis(n: number): string[] {
  const ans: string[] = [];

  // @todo: micro optimization: store an array of booleans (true - open; false - close; and index to the last)
  function backtrack(curr: string, started: number, ended: number) {
    // console.log(`curr: ${curr}; started: ${started}; ended: ${ended}`);

    if (started === n && ended === n) {
      // console.log(`- pushing to ans ${curr}`);
      ans.push(`${curr}`);
      return;
    } else if (started > n || ended >= n || ended > started) {
      // console.log(`- early breaking;`);
      return;
    }

    backtrack(curr + '(', started + 1, ended);

    // console.log(`- backtracked; curr = ${curr}`);

    if (started != ended) {
      // console.log(`- started != ended;`);
      backtrack(curr + ')', started, ended + 1);
    }
  }

  backtrack('', 0, 0);
  return ans;
}
