def findCircleNum(self, is_connected: List[List[int]]) -> int:
    n = len(is_connected)
    seen = [False] * n

    def dfs(root: int):
        seen[root] = True

        for i in range(n):
            if is_connected[root][i] and not seen[i]:
                dfs(i)

    ans = 0

    for i in range(n):
        if not seen[i]:
            ans += 1
            dfs(i)

    return ans
