/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  isSameTree(p, q) {
    const stack = [{ first: p, second: q }];
    while (stack.length > 0) {
      const { first, second } = stack.pop();
      if (!first && !second) continue;
      if (!first || !second) return false;
      if (first.val !== second.val) return false;
      stack.push({ first: first.left, second: second.left });
      stack.push({ first: first.right, second: second.right });
    }
    return true;
  }
}
