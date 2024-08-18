# Counting valleys

Here's a [link](https://www.hackerrank.com/challenges/counting-valleys/problem) to this challenge.

## Problem

Based on a given path of a hiker (up/down steps), we need to count how many valleys the hiker has crossed.

## Solution

A key observation is that each time we go up AND we're at a sea level, we went out of the valley. Thus, we can increment the number of valleys encountered.

## Analysis

**Problem difficulty**: easy

**Problem type**: implementation

**Time complexity**: O(n)
