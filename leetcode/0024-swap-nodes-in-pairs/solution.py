# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
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
