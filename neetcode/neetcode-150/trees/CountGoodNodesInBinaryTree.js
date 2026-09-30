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
  goodNodes(root) {
    const stack = [{ node: root, max: -Infinity }];
    let goodNodeCount = 0;
    while (stack.length > 0) {
      const { node, max } = stack.pop();
      if (node.val >= max) goodNodeCount++;
      const nextMax = Math.max(max, node.val);
      if (node.left) stack.push({ node: node.left, max: nextMax });
      if (node.right) stack.push({ node: node.right, max: nextMax });
    }
    return goodNodeCount;
  }
}
