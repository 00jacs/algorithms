def waysToSplitArray(self, nums: List[int]) -> int:
    prefix = [0] * len(nums)

    prefix[0] = nums[0]

    for i in range(1, len(nums)):
        prefix[i] = prefix[i - 1] + nums[i]

    ans = 0

    for i in range(1, len(nums)):
        left_sum = prefix[i - 1]
        right_sum = prefix[len(nums) - 1] - left_sum

        if left_sum >= right_sum:
            ans += 1

    return ans
