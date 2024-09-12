// there's probably a better way to solve this
// ex. we could use char->ascii code and compute the diff with 'a' and use %
// to determine ...
const numToLetterMap: string[][] = [
  // keep in mind the -2 offset
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z']
];

function dfs(index: number, digits: string, ans: string[], curr: string): void {
  if (index == digits.length) {
    ans.push(curr);
    return;
  }

  for (const letter of numToLetterMap[parseInt(digits[index]) - 2]) {
    curr += letter;
    dfs(index + 1, digits, ans, curr);
    curr = curr.slice(0, -1);
  }
}

function letterCombinations(digits: string): string[] {
  if (digits.length == 0) {
    return [];
  }

  const ans: string[] = [];
  let curr = '';

  dfs(0, digits, ans, curr);

  return ans;
}
