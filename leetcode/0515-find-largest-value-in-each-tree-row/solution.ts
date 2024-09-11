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

function largestValues(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  let queue: TreeNode[] = [root];
  const ans: number[] = [];

  while (queue.length) {
    const nextQueue: TreeNode[] = [];
    const nodesInCurrentLevel = queue.length;
    let maxVal: number = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < nodesInCurrentLevel; i++) {
      const node = queue[i];

      maxVal = Math.max(maxVal, node.val);

      if (node.left) {
        nextQueue.push(node.left);
      }

      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    queue = nextQueue;

    ans.push(maxVal);
  }

  return ans;
}
