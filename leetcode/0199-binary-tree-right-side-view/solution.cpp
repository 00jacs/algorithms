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
vector<int> rightSideView(TreeNode* root) {
    if (root == nullptr) {
        return {};
    }

    queue<TreeNode*> queue;
    queue.push(root);

    vector<int> ans;

    while (!queue.empty()) {
        int nodes_in_current_level = queue.size();

        ans.push_back(queue.back()->val);

        for (int i = 0; i < nodes_in_current_level; i++) {
            TreeNode* node = queue.front();
            queue.pop();

            if (node->left) {
                queue.push(node->left);
            }

            if (node->right) {
                queue.push(node->right);
            }
        }
    }

    return ans;
}
