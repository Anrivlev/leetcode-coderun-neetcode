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
   * @return {number[][]}
   */
  levelOrder(root) {
    if (!root) return [];
    const levels = [];
    let level = [root];
    while (level.length > 0) {
      levels.push(level.map((node) => node.val));
      const nextLevel = [];
      for (const node of level) {
        if (node.left) nextLevel.push(node.left);
        if (node.right) nextLevel.push(node.right);
      }
      level = nextLevel;
    }
    return levels;
  }
}
