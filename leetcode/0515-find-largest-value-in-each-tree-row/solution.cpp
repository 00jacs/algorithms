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
vector<int> largestValues(TreeNode* root) {
    if (root == nullptr) {
        return {};
    }

    queue<TreeNode*> queue;
    queue.push(root);

    vector<int> ans;

    while (!queue.empty()) {
        int nodes_in_current_level = queue.size();
        int max_val = INT_MIN;

        for (int i = 0; i < nodes_in_current_level; i++) {
            TreeNode* node = queue.front();
            queue.pop();

            max_val = max(max_val, node->val);

            if (node->left) {
                queue.push(node->left);
            }

            if (node->right) {
                queue.push(node->right);
            }
        }

        ans.push_back(max_val);
    }

    return ans;
}
