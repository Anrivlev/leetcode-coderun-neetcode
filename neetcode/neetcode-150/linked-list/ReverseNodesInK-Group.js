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
   * @param {number} k
   * @return {ListNode}
   */
  reverseKGroup(head, k) {
    if (head === null) return null;
    let curr = head;
    let prev = null;
    for (let i = 0; i < k; i++) {
      if (!curr) return this.reverse(prev);
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    head.next = this.reverseKGroup(curr, k);
    return prev;
  }

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

const solution = new Solution().reverseKGroup(
  {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: {
              val: 6,
              next: null,
            },
          },
        },
      },
    },
  },
  3,
);

const tokens = [];
let curr = solution;
while (curr) {
  tokens.push(curr.val);
  curr = curr.next;
}
console.log(tokens.join(" "));
