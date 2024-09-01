ListNode* swapPairs(ListNode* head) {
    if (!head) {
        return head;
    }

    ListNode* prev = nullptr;
    ListNode* first = head;
    ListNode* second = head->next;

    while (second != nullptr) {
        ListNode* next_node = second->next;

        first->next = next_node;
        second->next = first;

        if (prev != nullptr) {
            prev->next = second;
        } else {
            head = second;
        }

        // increment
        prev = first;
        first = first->next;

        if (first == nullptr) {
            break;
        }

        second = first->next;
    }

    return head;
}
