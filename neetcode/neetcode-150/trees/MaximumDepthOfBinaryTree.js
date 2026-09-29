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
  maxDepth(root) {
    if (!root) return 0;
    return Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
  }
}

class Solution {
  /**
   * DFS
   * @param {TreeNode} root
   * @return {number}
   */
  maxDepth(root) {
    if (!root) return 0;
    let max = 0;
    const stack = [{ node: root, depth: 1 }];
    while (stack.length > 0) {
      const { node, depth } = stack.pop();
      if (depth > max) max = depth;
      if (node.left) stack.push({ node: node.left, depth: depth + 1 });
      if (node.right) stack.push({ node: node.right, depth: depth + 1 });
    }
    return max;
  }
}
