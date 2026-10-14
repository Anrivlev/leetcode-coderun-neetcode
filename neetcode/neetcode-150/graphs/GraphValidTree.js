class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {boolean}
   */
  validTree(n, edges) {
    const adjacencies = Array.from({ length: n }, () => []);
    for (const [start, end] of edges) {
      adjacencies[start].push(end);
      adjacencies[end].push(start);
    }

    const visiting = new Array(n).fill(false);
    const finished = new Array(n).fill(false);

    const dfs = (node, prev) => {
      if (visiting[node] || finished[node]) return false;

      visiting[node] = true;
      for (const adjacent of adjacencies[node]) {
        if (adjacent === prev) continue;
        if (!dfs(adjacent, node)) return false;
      }

      visiting[node] = false;
      finished[node] = true;

      return true;
    };

    if (!dfs(0, null)) return false;

    return finished.every((val) => !!val);
  }
}

console.log(
  new Solution().validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ]),
);
