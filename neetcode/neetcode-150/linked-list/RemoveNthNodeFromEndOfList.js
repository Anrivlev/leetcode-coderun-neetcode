/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    const length = this.getLength(head);
    if (length < n) return;
    return this.removeNth(head, length - n);
  }

  removeNth(head, n) {
    if (n === 0) return head.next;
    let curr = head;
    for (let i = 0; i < n - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
    return head;
  }

  /**
   * @param {ListNode} head
   * @return {number}
   */
  getLength(head) {
    if (!head) return 0;
    let curr = head;
    let length = 0;
    while (curr) {
      curr = curr.next;
      length++;
    }
    return length;
  }
}

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};
const n = 2;
new Solution().removeNthFromEnd(head, n);
new Solution().removeNthFromEnd({ val: 1, next: { val: 2, next: null } }, 2);
