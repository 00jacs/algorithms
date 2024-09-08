def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
    graph = [set() for i in range(n + 1)]

    for x, y in edges:
        graph[x].add(y)
        graph[y].add(x)

    seen = [False] * n

    def dfs(root):
        seen[root] = True

        if root == destination:
            return True

        ans = False
        for neighbour in graph[root]:
            if not seen[neighbour]:
                if dfs(neighbour):
                    ans = True
                    break

        return ans

    return dfs(source)
