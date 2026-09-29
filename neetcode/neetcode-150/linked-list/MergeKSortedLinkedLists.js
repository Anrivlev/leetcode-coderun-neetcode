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
   * Чудовищно неэффективное решение
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    let head = null;
    for (const list of lists) {
      head = this.merge2Lists(head, list);
    }
    return head;
  }

  /**
   * @param {ListNode} a
   * @param {ListNode} b
   * @return {ListNode}
   */
  merge2Lists(a, b) {
    if (!a && !b) return null;
    if (!a) return b;
    if (!b) return a;

    let first, second;
    if (a.val <= b.val) {
      first = a;
      second = b;
    } else {
      first = b;
      second = a;
    }

    const head = first;

    let c1 = first.next;
    let c2 = second;
    let c3 = head;
    while (c1 && c2) {
      if (c1.val <= c2.val) {
        c3.next = c1;
        c3 = c3.next;
        c1 = c1.next;
      } else {
        c3.next = c2;
        c3 = c3.next;
        c2 = c2.next;
      }
    }
    while (c1) {
      c3.next = c1;
      c3 = c3.next;
      c1 = c1.next;
    }
    while (c2) {
      c3.next = c2;
      c3 = c3.next;
      c2 = c2.next;
    }
    return head;
  }
}

class Solution {
  /**
   * Я не буду писать хипу сам. Divide and Conquer алгоритм.
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    if (lists.length === 2) return this.merge2Lists(lists[0], lists[1]);
    const halfLength = Math.floor(lists.length / 2);
    return this.merge2Lists(
      this.mergeKLists(lists.slice(0, halfLength)),
      this.mergeKLists(lists.slice(halfLength)),
    );
  }

  /**
   * @param {ListNode} a
   * @param {ListNode} b
   * @return {ListNode}
   */
  merge2Lists(a, b) {
    if (!a && !b) return null;
    if (!a) return b;
    if (!b) return a;

    let first, second;
    if (a.val <= b.val) {
      first = a;
      second = b;
    } else {
      first = b;
      second = a;
    }

    const head = first;

    let c1 = first.next;
    let c2 = second;
    let c3 = head;
    while (c1 && c2) {
      if (c1.val <= c2.val) {
        c3.next = c1;
        c3 = c3.next;
        c1 = c1.next;
      } else {
        c3.next = c2;
        c3 = c3.next;
        c2 = c2.next;
      }
    }
    while (c1) {
      c3.next = c1;
      c3 = c3.next;
      c1 = c1.next;
    }
    while (c2) {
      c3.next = c2;
      c3 = c3.next;
      c2 = c2.next;
    }
    return head;
  }
}
