# Encryption

Here's a [link](https://www.hackerrank.com/challenges/encryption/problem) to this challenge.

## Problem

1. We need to find the numbers 'rows' and 'cols' for a given `len(s)` - pretty straight-forward

2. We need to iterate throught the string in such a manner to get the encrypted string.

## Solution

1. Find the number of rows and columns for the given string length:

```python
s = s.replace(' ', '')
rows = math.floor(math.sqrt(len(s)))
cols = math.ceil(math.sqrt(len(s)))

if rows * cols < len(s):
    rows += 1
```

This way, we get `rows` and `cols` which have minimum area `rows * cols` and which satisfy the condition described in the problem.

2. Iterate through the string and build the encrypted string:

```python
result = ''

# iterate through all the columns
for i in range(cols):
    # iterate through all the rows
    for j in range(rows):
        # if we have not yet gotten out of range,
        # add the character from column "i" and row "j"
        if i + j * cols < len(s):
            result += s[i + j * cols]
    result += ' '
```

## Analysis

**Problem difficulty**: easy

**Problem type**: implementation

**Time complexity**: O(n)
