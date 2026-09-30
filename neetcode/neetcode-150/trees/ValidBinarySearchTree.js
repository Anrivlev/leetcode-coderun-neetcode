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
   * @return {boolean}
   */
  isValidBST(root) {
    const stack = [{ node: root, min: -Infinity, max: Infinity }];
    while (stack.length > 0) {
      const { node, min, max } = stack.pop();
      if (node.val <= min || node.val >= max) return false;
      if (node.left) stack.push({ node: node.left, min, max: node.val });
      if (node.right) stack.push({ node: node.right, min: node.val, max });
    }
    return true;
  }
}
