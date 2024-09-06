/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
int deepestLeavesSum(TreeNode* root) {
    if (root == nullptr) {
        return 0;
    }

    queue<TreeNode*> queue;
    queue.push(root);

    int sum_on_level = 0;

    while (!queue.empty()) {
        int nodes_in_current_level = queue.size();
        sum_on_level = 0;

        for (int i = 0; i < nodes_in_current_level; i++) {
            TreeNode* node = queue.front();
            queue.pop();

            sum_on_level += node->val;

            if (node->left) {
                queue.push(node->left);
            }

            if (node->right) {
                queue.push(node->right);
            }
        }
    }

    return sum_on_level;
}
