# 24. Swap Nodes in Pairs

Here's a [link](https://leetcode.com/problems/swap-nodes-in-pairs/) to the problem.

## Problem

Given a linked list, swap each pair (example of list of pairs: {0, 1}, {2, 3}, {4, 5}).

## Solution

This problem requires us to heavily think about pointers and how we can manipulate them.

This problem is very similar to reversing linked lists, but with a twist - instead of reversing the entire linked list, we only apply that logic for 2 consecutive elements (a pair).

The solution is the following:
- `prev` will denote our previous node (before the pair) - initialize to `nullptr`
- `first` will denote the first node of the pair - initialize to `head`
- `second` will denote the second node of the pair - initialize to `head->next`

The goal of each iteration is to:
- swap the `first` and `second` nodes
- update the `prev` node to point to the `second` node (which is now our "first" node)

It's important to visualize this approach with pen & paper first to see that it makes complete sense.

Here's a code snippet in Python:

```Python
def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
    if head is None:
        return head

    prev = None
    first = head
    second = head.next

    while second:
        next_node = second.next

        first.next = next_node
        second.next = first

        if prev is not None:
            prev.next = second
        else:
            head = second

        # Increment the pointers
        prev = first
        first = first.next

        if first is None:
            break

        second = first.next

    return head
```

## Analysis

**Problem difficulty**: easy

**Problem type**: linked list, pointers

**Time complexity**: O(n)

## Similar problems

- [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/description/)
