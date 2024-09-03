function makeGood(s: string): string {
  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (
      stack.length &&
      // probably could make this faster by using ASCII codes comparison
      // instead of calling these methods, but the performance difference
      // is negligable (probably a few %)
      ((s[i] == s[i].toUpperCase() &&
        stack[stack.length - 1] == stack[stack.length - 1].toLowerCase() &&
        s[i].toLowerCase() == stack[stack.length - 1]) ||
        (s[i] == s[i].toLowerCase() &&
          stack[stack.length - 1] == stack[stack.length - 1].toUpperCase() &&
          s[i].toUpperCase() == stack[stack.length - 1]))
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}
