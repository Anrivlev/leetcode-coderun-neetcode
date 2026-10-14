class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   */
  countComponents(n, edges) {
    const adjacencies = Array.from({ length: n }, () => []);
    for (const [start, end] of edges) {
      adjacencies[start].push(end);
      adjacencies[end].push(start);
    }

    const visited = new Array(n).fill(false);

    let componentCount = 0;

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      componentCount++;

      const stack = [i];
      while (stack.length > 0) {
        const curr = stack.pop();
        for (const adj of adjacencies[curr]) {
          if (visited[adj]) continue;
          visited[adj] = true;
          stack.push(adj);
        }
      }
    }

    return componentCount;
  }
}
