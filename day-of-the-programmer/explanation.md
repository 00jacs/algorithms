# Day of the programmer

Here's a [link](https://www.hackerrank.com/challenges/day-of-the-programmer/problem) to this challenge.

## Problem

We need to print a proper date, given a year.

## Solution

An observation is that we output only one of the three dates:

1. 12.09.xxxx for leap years

2. 13.09.xxxx for non-leap years

3. 26.09.1918 for the year 1918 (it's a special year in the Russian calendar, as stated in the problem description)

A solution is just creating a simple if and returning a date based on the fact that the year is a leap year or not.

## Analysis

**Problem difficulty**: easy

**Problem type**: implementation

**Time complexity**: O(1)
