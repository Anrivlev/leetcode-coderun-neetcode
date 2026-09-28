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
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    const value = l1.val + l2.val;
    let remainder = value > 9 ? 1 : 0;
    const head = { val: (l1.val + l2.val) % 10, next: null };
    let curr1 = l1.next;
    let curr2 = l2.next;
    let prev = head;
    while (curr1 && curr2) {
      const value = curr1.val + curr2.val + remainder;
      remainder = value > 9 ? 1 : 0;
      const next = { val: value % 10, next: null };
      prev.next = next;
      prev = next;
      curr1 = curr1.next;
      curr2 = curr2.next;
    }
    while (curr1) {
      const value = curr1.val + remainder;
      remainder = value > 9 ? 1 : 0;
      const next = { val: value % 10, next: null };
      prev.next = next;
      prev = next;
      curr1 = curr1.next;
    }
    while (curr2) {
      const value = curr2.val + remainder;
      remainder = value > 9 ? 1 : 0;
      const next = { val: value % 10, next: null };
      prev.next = next;
      prev = next;
      curr2 = curr2.next;
    }
    if (remainder === 1) {
      prev.next = { val: 1, next: null };
    }
    return head;
  }
}
