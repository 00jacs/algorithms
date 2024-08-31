def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
    if head is None:
        return head

    slow = head
    fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next
        fast = fast.next

    return slow
