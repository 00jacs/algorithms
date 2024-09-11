# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
    if not root:
        return []

    ans = []
    queue = deque([root])

    while queue:
        nodes_in_current_level = len(queue)
        ans.append(queue[-1].val)

        for i in range(nodes_in_current_level):
            node = queue.popleft()

            if node.left:
                queue.append(node.left)

            if node.right:
                queue.append(node.right)

    return ans
