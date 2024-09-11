# 92. Reverse Linked List II

Here's a [link](https://leetcode.com/problems/reverse-linked-list-ii/) to the problem.

## Problem

Reverse a linked list from position `left` to `right`. Do it in one-pass.

## Solution

The problem is a classic example of reversing a linked list. We can use the iterative approach to solve this problem.

In short:
- let's find the first `left_node` and the previous node of the `left_node`
- reverse the linked list from `left_node` to `right_node`
- update the pointers of the previous node of the `left_node` and the `left_node`
- return the `head`

It's just a slight variation of the [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/).

Here's the code:

```cpp
ListNode* reverseBetween(ListNode* head, int left, int right) {
    // 0. Special case: if the linked list is empty or has only one node, no need to reverse
    if (head == nullptr || head->next == nullptr) {
        return head;
    }

    // 1. Let's find the first node to be reversed (`left_node`) and
    // the previous node of the left_node (`before`)
    ListNode* before = nullptr;
    ListNode* left_node = head;

    for (int i = 0; i < left - 1; i++) {
        if (i == left - 2) {
            before = left_node;
        }

        left_node = left_node->next;
    }

    // 2. Classic Reverse linked list problem (see: 206. Reverse Linked List)
    ListNode* prev = left_node;
    ListNode* curr = left_node->next;
    for (int i = left; i < right; i++) {
        ListNode* next_node = curr->next;

        curr->next = prev;
        prev = curr;
        curr = next_node;
    }

    // 3. After reversing:
    // - update the link from the first node before the reversed part to the last node of the reversed part
    // - update the link from the last node of the reversed part to the first node after the reversed part
    if (before == nullptr) {
        head = prev;
    } else {
        before->next = prev;
    }

    left_node->next = curr;

    return head;
}
```

## Analysis

**Problem difficulty**: easy

**Problem type**: linked list, reverse

**Time complexity**: O(n)

## Similar problems

- [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
