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
   * @return {number}
   */
  maxPathSum(root) {
    let maxPath = -Infinity;

    function dfs(root) {
      if (!root) return 0;
      const leftSum = dfs(root.left);
      const rightSum = dfs(root.right);
      maxPath = Math.max(maxPath, leftSum + root.val + rightSum);
      return Math.max(0, root.val, leftSum + root.val, rightSum + root.val);
    }
    dfs(root);
    return maxPath;
  }
}
