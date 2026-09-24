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
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1, list2) {
    if (list1 === null && list2 === null) return null;
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    let curr1 = list1;
    let curr2 = list2;
    let head;
    if (curr1.val > curr2.val) {
      head = curr2;
      curr2 = curr2.next;
    } else {
      head = curr1;
      curr1 = curr1.next;
    }
    let prev = head;
    while (curr1 || curr2) {
      if (curr1 && curr2) {
        if (curr1.val > curr2.val) {
          prev.next = curr2;
          curr2 = curr2.next;
        } else {
          prev.next = curr1;
          curr1 = curr1.next;
        }
      } else if (curr1) {
        prev.next = curr1;
        curr1 = curr1.next;
      } else {
        prev.next = curr2;
        curr2 = curr2.next;
      }
      prev = prev.next;
    }
    return head;
  }
}
