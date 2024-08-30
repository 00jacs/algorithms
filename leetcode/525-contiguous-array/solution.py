def findMaxLength(self, nums: List[int]) -> int:
    m = {}

    sum = 0
    ans = 0

    for i in range(len(nums)):
        sum += -1 if nums[i] == 0 else 1

        if sum == 0:
            ans = max(ans, i + 1)
        elif sum in m:
            ans = max(ans, i - m[sum])
        else:
            m[sum] = i

    return ans
