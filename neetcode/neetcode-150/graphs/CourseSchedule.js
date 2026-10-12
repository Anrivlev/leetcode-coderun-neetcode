class Solution {
  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @return {boolean}
   */
  canFinish(numCourses, prerequisites) {
    const adjacencies = Array.from({ length: numCourses }, () => []);
    for (const [a, b] of prerequisites) {
      adjacencies[a].push(b);
    }

    const visited = new Array(numCourses).fill(false);

    const dfs = (course) => {
      if (visited[course]) return false;

      if (adjacencies[course].length === 0) return true;

      visited[course] = true;
      for (const prerequisite of adjacencies[course]) {
        if (!dfs(prerequisite)) return false;
      }

      visited[course] = false;
      adjacencies[course] = [];
      return true;
    };

    for (let i = 0; i < numCourses; i++) {
      if (!dfs(i)) return false;
    }

    return true;
  }
}
