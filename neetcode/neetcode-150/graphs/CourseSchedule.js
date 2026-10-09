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

    const STATUS = {
      NOT_VISITED: 0,
      VISITED: 1,
      VISITED_AND_LEFT: 2,
    };

    const visited = new Array(numCourses).fill(STATUS.NOT_VISITED);

    for (let i = 0; i < numCourses; i++) {
      const stack = [i];
      while (stack.length > 0) {
        const curr = stack.pop();

        if (visited[curr] === STATUS.VISITED) return false;
        visited[curr] = STATUS.VISITED;

        const neighbours = adjacencies[curr];
        if (neighbours.length === 0) {
          visited[curr] = STATUS.VISITED_AND_LEFT;
          continue;
        }

        const stack = [...neighbours];
      }
    }

    return true;
  }
}
