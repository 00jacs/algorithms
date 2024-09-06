/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let queue: TreeNode[] = [root];
  let sumOnLevel = 0;

  while (queue.length) {
    sumOnLevel = 0;
    let nextQueue: TreeNode[] = [];

    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];

      sumOnLevel += node.val;

      if (node.left) {
        nextQueue.push(node.left);
      }

      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    queue = nextQueue;
  }

  return sumOnLevel;
}
