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
   * Recursive
   * @param {TreeNode} root
   * @return {number}
   */
  diameterOfBinaryTree(root) {
    if (!root) return 0;
    return this.getMaxDepthAndMaxDiameter(root).diameter;
  }

  getMaxDepthAndMaxDiameter(root) {
    if (!root) return { depth: 0, diameter: 0 };
    const leftMaxes = this.getMaxDepthAndMaxDiameter(root.left);
    const rightMaxes = this.getMaxDepthAndMaxDiameter(root.right);
    const depth = Math.max(leftMaxes.depth, rightMaxes.depth) + 1;
    const diameter = leftMaxes.depth + rightMaxes.depth;
    return {
      depth,
      diameter: Math.max(diameter, leftMaxes.diameter, rightMaxes.diameter),
    };
  }
}
