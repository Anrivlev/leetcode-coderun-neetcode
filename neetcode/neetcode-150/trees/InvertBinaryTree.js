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
   * Рекурсивное решение
   * @param {TreeNode} root
   * @return {TreeNode}
   */
  invertTree(root) {
    if (root === null) return null;
    const left = root.left;
    root.left = this.invertTree(root.right);
    root.right = this.invertTree(left);
    return root;
  }
}

class Solution {
  /**
   * Dfs решение
   * @param {TreeNode} root
   * @return {TreeNode}
   */
  invertTree(root) {
    if (root === null) return null;
    const stack = [root];
    while (stack.length > 0) {
      const node = stack.pop();
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
      const left = node.left;
      node.left = node.right;
      node.right = left;
    }
    return root;
  }
}
