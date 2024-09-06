# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
    if not root:
        return []

    queue = deque([root])
    sum_on_level = 0

    while queue:
        nodes_in_current_level = len(queue)
        sum_on_level = 0

        for i in range(nodes_in_current_level):
            node = queue.popleft()

            sum_on_level += node.val

            if node.left:
                queue.append(node.left)

            if node.right:
                queue.append(node.right)

    return sum_on_level
