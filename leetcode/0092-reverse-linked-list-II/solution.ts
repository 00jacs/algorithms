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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  // no need to reverse if there is only one node (or 0)
  if (!head || !head.next) {
    return head;
  }

  // let's find the first node to be reversed
  let before: ListNode | null = null;
  let leftNode: ListNode | null = head;

  for (let i = 0; i < left - 1; i++) {
    if (i == left - 2) {
      before = leftNode;
    }

    leftNode = leftNode.next;
  }

  // console.log(`before val: ${before.val}; leftNode val: ${leftNode.val};`);

  // now we're moving to a classic reverse linked list problem
  let prev: ListNode | null = leftNode;
  let curr: ListNode | null = leftNode.next;

  for (let i = left; i < right; i++) {
    const nextNode: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  // console.log(`After iteration: ${curr.val}, prev: ${prev.val};`);

  // after reversing, update the link from the first node before
  // the "left" and the first node after "right"
  // to correctly point to our reverse (left, right) part of the LL
  if (!before) {
    head = prev;
  } else {
    before.next = prev;
  }

  leftNode.next = curr;

  return head;
}
