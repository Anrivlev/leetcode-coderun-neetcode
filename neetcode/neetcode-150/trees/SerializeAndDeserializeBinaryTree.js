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

class Codec {
  /**
   * Encodes a tree to a single string.
   *
   * @param {TreeNode} root
   * @return {string}
   */
  serialize(root) {
    if (!root) return `N`;
    const tokens = [];
    const stack = [root];
    while (stack.length > 0) {
      const node = stack.pop();
      if (!node) {
        tokens.push("N");
        continue;
      } else {
        tokens.push(node.val);
      }
      stack.push(node.right);
      stack.push(node.left);
    }
    return tokens.join(",");
  }

  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  deserialize(data) {
    const tokens = data.split(",");

    let index = 0;

    function dfs() {
      const token = tokens[index++];
      if (token === "N") return null;
      const val = Number.parseInt(token, 10);
      const left = dfs();
      const right = dfs();
      return { val, left, right };
    }

    return dfs();
  }
}

const codec = new Codec();
console.log(codec.deserialize(codec.serialize(null)));
console.log(
  codec.deserialize(codec.serialize({ val: 1, left: null, right: null })),
);
