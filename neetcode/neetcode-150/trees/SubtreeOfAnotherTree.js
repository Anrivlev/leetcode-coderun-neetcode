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
   * @param {TreeNode} root
   * @param {TreeNode} subRoot
   * @return {boolean}
   */
  isSubtree(root, subRoot) {
    if (!root && !subRoot) return true;
    if (!root || !subRoot) return false;
    return (
      this.isSame(root, subRoot) ||
      this.isSubtree(root.left, subRoot) ||
      this.isSubtree(root.right, subRoot)
    );
  }

  /**
   * @param {TreeNode} a
   * @param {TreeNode} b
   * @return {boolean}
   */
  isSame(a, b) {
    const stack = [{ a, b }];
    while (stack.length > 0) {
      const { a, b } = stack.pop();
      if (!a && !b) continue;
      if (!a || !b) return false;
      if (a.val !== b.val) return false;
      stack.push({ a: a.left, b: b.left });
      stack.push({ a: a.right, b: b.right });
    }
    return true;
  }
}
