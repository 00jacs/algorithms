def largestUniqueNumber(self, nums: List[int]) -> int:
    counts = [0] * 1001

    for num in nums:
        print(num)
        counts[num] += 1

    ans = -1
    for num in range(0, 1001):
        if counts[num] == 1:
            ans = max(ans, num)

    return ans
