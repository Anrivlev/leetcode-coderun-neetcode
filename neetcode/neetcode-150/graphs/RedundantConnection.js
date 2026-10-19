class Solution {
  /**
   * @param {number[][]} edges
   * @return {number[]}
   */
  findRedundantConnection(edges) {
    const n = edges.length + 1;
    const parents = new Array(n).fill(0).map((value, index) => index);
    const sizes = new Array(n).fill(1);

    const find = (i) => {
      let p = i;
      while (p !== parents[p]) {
        parents[p] = parents[parents[p]];
        p = parents[p];
      }
      return p;
    };

    const union = (i1, i2) => {
      const p1 = find(i1);
      const p2 = find(i2);

      if (p1 === p2) return false;

      if (sizes[p1] > sizes[p2]) {
        parents[p2] = p1;
        sizes[p1] += sizes[p2];
      } else {
        parents[p1] = p2;
        sizes[p2] += sizes[p1];
      }

      return true;
    };

    for (const [i1, i2] of edges) {
      if (!union(i1, i2)) return [i1, i2];
    }

    return [];
  }
}
