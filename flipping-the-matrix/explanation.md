# Flipping the matrix

## Essence of the problem

The problem requires us to maximize the sum of the upper-left quadrant of a given 2n x 2n matrix. We can flip any row or column of the matrix.

## Solution

1. Let's notice that quadrants are symmetrical - we have four n by n quadrants in our square.

2. Any element in the upper-left quadrant can potentially be replaced by elements from corresponding positions in the other three quadrants via row/column flips.

3. For an element at position (i, j) in the upper-left quadrant:
- flipping a row places the element from the bottom-left quadrant at position (i, j)
- flipping a column places the element from the top-right quadrant at position (i, j)
- flipping both the row and column places the element from the bottom-right quadrant at position (i, j)

4. We can maximize every element in the upper-left quadrant by selecting the maximum of the four corresponding elements from the other quadrants.

5. Why this works? Because by allowing any number of row and column flips, we can position any of the four candidate values at the top-left quadrant position (i, j). Thus, for each (i, j) we can select the highest values possible for the four options - there is an independence of choices.

## Analysis

**Problem difficulty**: medium
**Problem type**: maths
**Time complexity**: O(n^2)
