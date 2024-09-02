/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseBetween(ListNode* head, int left, int right) {
        // let's find the first node to be reversed
        ListNode* before = nullptr;
        ListNode* left_node = head;

        for (int i = 0; i < left - 1; i++) {
            if (i == left - 2) {
                before = left_node;
            }

            left_node = left_node->next;
        }

        // classic reverse linked list
        ListNode* prev = left_node;
        ListNode* curr = left_node->next;
        for (int i = left; i < right; i++) {
            ListNode* next_node = curr->next;

            curr->next = prev;
            prev = curr;
            curr = next_node;
        }

        // after reversing, update the link from the first node before
        // the "left" and the first node after "right"
        // to correctly point to our reverse (left, right) part of the LL
        if (before == nullptr) {
            head = prev;
        } else {
            before->next = prev;
        }

        left_node->next = curr;

        return head;
    }
};
