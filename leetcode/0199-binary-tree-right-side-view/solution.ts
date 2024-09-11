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

function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  let queue: TreeNode[] = [root];
  let ans: number[] = [];

  while (queue.length) {
    const nodesInCurrentLevel = queue.length;
    let nextQueue: Array<TreeNode> = [];

    ans.push(queue[nodesInCurrentLevel - 1].val);

    for (let i = 0; i < nodesInCurrentLevel; i++) {
      let node = queue[i];

      if (node.left) {
        nextQueue.push(node.left);
      }

      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    queue = nextQueue;
  }

  return ans;
}
