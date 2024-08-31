# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

def hasCycle(self, head: Optional[ListNode]) -> bool:
    if head == None:
        return False

    slow = head
    fast = head.next

    while fast and fast.next:
        slow = slow.next
        fast = fast.next
        fast = fast.next

        # our pointers have met
        if slow is fast:
            return True

    return False
