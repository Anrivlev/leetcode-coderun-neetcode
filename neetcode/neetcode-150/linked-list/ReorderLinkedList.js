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
   * @return {void}
   */
  reorderList(head) {
    if (head === null) return;
    const mid = this.getMid(head);
    const reversedFromMid = this.reverse(mid);
    let curr1 = head;
    let curr2 = reversedFromMid;
    while (curr2) {
      const next1 = curr1.next;
      const next2 = curr2.next;
      curr1.next = curr2;
      curr2.next = next1;
      curr1 = next1;
      curr2 = next2;
    }
    if (curr1?.next === mid) curr1.next = null;
  }

  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  getMid(head) {
    let slow = head;
    let fast = head.next;
    while (fast) {
      fast = fast.next?.next;
      slow = slow.next;
    }
    return slow;
  }

  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverse(head) {
    let curr = head;
    let prev = null;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
}

const head = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 6,
      next: {
        val: 8,
        next: null,
      },
    },
  },
};

console.log(new Solution().reorderList(head));
