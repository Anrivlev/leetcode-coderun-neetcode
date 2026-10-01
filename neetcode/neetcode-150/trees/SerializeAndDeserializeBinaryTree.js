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

class Codec {
  /**
   * Encodes a tree to a single string.
   *
   * @param {TreeNode} root
   * @return {string}
   */
  serialize(root) {
    if (!root) return `null`;
    return `{"val":${root.val},"left":${this.serialize(
      root.left,
    )},"right":${this.serialize(root.right)}}`;
  }

  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  deserialize(data) {
    return JSON.parse(data);
  }
}

const codec = new Codec();
console.log(codec.deserialize(codec.serialize(null)));
console.log(
  codec.deserialize(codec.serialize({ val: 1, left: null, right: null })),
);
