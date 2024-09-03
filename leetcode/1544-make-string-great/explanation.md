# 1544. Make The String Great

Here's a [link](https://leetcode.com/problems/make-the-string-great/) to the problem.

## Problem

Remove any two adjacent characters that are the same and then repeat the process until it cannot be done.

## Solution

The problem is a classic example of a stack. We can iterate over the string and push each character to the stack. If the top of the stack is the same as the current character (but in "opposite" casing - lower case or upper case), we pop the top of the stack. Otherwise, we push the current character to the stack.

Then, we can construct the final string by joining the characters in the stack.

Here's the code:

```python
def makeGood(self, s: str) -> str:
    stack = []

    def is_upper_version(a: str, b: str) -> bool:
        if len(a) != 1 or len(b) != 1:
            raise ValueError("Both inputs must be single characters.")

        return (a == b.upper() and b == a.lower()) or (b == a.upper() and a == b.lower())

    for i in range(len(s)):
        if len(stack) and is_upper_version(stack[-1], s[i]):
            stack.pop()
        else:
            stack.append(s[i])

    return "".join(stack)
```

---

## Analysis

**Problem difficulty**: easy

**Problem type**: stack

**Time complexity**: O(n)

**Space complexity**: O(n)

---

## Similar problems

- [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
- [71. Simplify Path](https://leetcode.com/problems/simplify-path/)
