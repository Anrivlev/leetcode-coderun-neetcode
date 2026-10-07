/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
  /**
   * @param {Node} node
   * @return {Node}
   */
  cloneGraph(node) {
    if (node === null) return null;
    const nodes = new Map();
    const copy = { val: node.val, neighbors: [] };
    nodes.set(node, copy);

    const stack = [{ node, copy }];
    while (stack.length > 0) {
      const { node, copy } = stack.pop();
      for (const neighbor of node.neighbors) {
        let copiedNeighbor = nodes.get(neighbor);
        if (!copiedNeighbor) {
          copiedNeighbor = { val: neighbor.val, neighbors: [] };
          nodes.set(neighbor, copiedNeighbor);
          stack.push({ node: neighbor, copy: copiedNeighbor });
        }
        copy.neighbors.push(copiedNeighbor);
      }
    }
    return copy;
  }
}
