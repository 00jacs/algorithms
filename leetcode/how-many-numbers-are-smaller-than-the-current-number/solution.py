def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
    count_lower = [0] * 101
    result = [0] * len(nums)

    for num in nums:
        j = num + 1
        while (j < 101):
            count_lower[j] += 1
            j += 1

    for i in range(len(nums)):
        result[i] = count_lower[nums[i]]

    return result
