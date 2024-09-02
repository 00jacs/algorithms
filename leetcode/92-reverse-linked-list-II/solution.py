# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
    # if we have only one element (or 0), no need to reverse
    if head is None or head.next is None:
        return head

    # let's find the first node to be reversed
    before = None
    left_node = head

    for i in range(left - 1):
        if i == left - 2:
            before = left_node

        left_node = left_node.next


    # classic reverse linked list
    prev = left_node
    curr = left_node.next

    for i in range(left, right):
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node

    # after reversing, update the link from the first node before
    # the "left" and the first node after "right"
    # to correctly point to our reverse (left, right) part of the LL
    if before is None:
        head = prev
    else:
        before.next = prev

    left_node.next = curr

    return head
