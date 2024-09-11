# 71. Simplify Path

Here's a [link](https://leetcode.com/problems/simplify-path/) to the problem.

## Problem

Convert a UNIX path to a canonical path, examples:

- `/home/` -> `/home`
- `/../` -> `/`
- `/home//foo/` -> `/home/foo`

## Solution

The problem is a classic stack problem. We can use a stack to keep track of the directories we have visited.

In short:
- split the input path by `/`
- iterate over the directories
  - if the directory is `.` or empty, do nothing
  - if the directory is `..`, pop the stack
  - otherwise, push the directory to the stack

Finally, we can construct the canonical path by joining the directories in the stack.

Here's the code:

```python
def simplifyPath(self, path: str) -> str:
    path = path.replace('//', '/')
    path_dirs = path.split('/')
    path_stack = []

    for i, _dir in enumerate(path_dirs):
        if _dir == '..':
            if len(path_stack):
                path_stack.pop()
        elif len(_dir) and _dir != '.':
            path_stack.append(_dir)

    return '/' + '/'.join(path_stack)
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
- [150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)
