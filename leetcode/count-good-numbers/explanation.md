# Count good numbers

Here's a [link](https://www.hackerrank.com/challenges/counting-valleys/problem) to this challenge.

## Problem

For all the numbers with digits "n" (**with leading 0's also**), count how many possibilities there are to create a special number:
- at even indices, the digit is even (0, 2, 4, 6, 8)
- at odd indices, the digit is prime (2, 3, 5, 7)

## Solution

It turns out to be a relatively simple combinatorics problem:

- at each even place, we have 5 possibilities (0, 2, 4, 6, 8)
- at each odd place, we have 4 possibilities (2, 3, 5, 7)

Thus, the total number of possibilities is `5 ^ even_places * 4 ^ odd_places`.

However, we need to be careful with the modulo operation. We can't just calculate the power of 5 and 4 and then take the modulo. Instead, we need to calculate the power of 5 and 4 modulo `10^9 + 7` and then multiply them.

The only "trick" for this problem is to:
- use binary exponentiation to calculate the power of 5 and 4 ***efficiently***
- use the modulo operation to avoid overflow

## Analysis

**Problem difficulty**: medium

**Problem type**: algebra, binary exponentation

**Time complexity**: O(log n)
