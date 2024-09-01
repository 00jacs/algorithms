/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  let prev: ListNode | null = null;
  let first: ListNode | null = head;
  let second: ListNode | null = head.next;

  while (second) {
    const nextNode: ListNode | null = second.next;

    first.next = nextNode;
    second.next = first;

    if (prev) {
      prev.next = second;
    } else {
      head = second;
    }

    prev = first;
    first = first.next;

    if (!first) {
      break;
    }

    second = first.next;
  }

  return head;
}
