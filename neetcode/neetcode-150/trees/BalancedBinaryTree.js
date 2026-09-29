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
  isBalanced(root) {
    return this.getDepthAndIsBalanced(root).isBalanced;
  }

  getDepthAndIsBalanced(root) {
    if (!root) return { depth: 0, isBalanced: true };
    const leftData = this.getDepthAndIsBalanced(root.left);
    const rightData = this.getDepthAndIsBalanced(root.right);
    const depth = Math.max(leftData.depth, rightData.depth) + 1;
    const isBalanced =
      leftData.isBalanced &&
      rightData.isBalanced &&
      Math.abs(leftData.depth - rightData.depth) <= 1;
    return { depth, isBalanced };
  }
}
