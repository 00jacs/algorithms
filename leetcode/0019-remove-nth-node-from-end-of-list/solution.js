/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head?.next) {
    return null;
  }

  let slow = null;
  let fast = head;

  for (let i = 0; i < n; i++) fast = fast.next;

  while (fast) {
    slow = slow?.next || head;
    fast = fast.next;
  }

  // removing the n'th node
  if (slow) slow.next = slow?.next?.next || null;
  else return head.next;

  return head;
};
