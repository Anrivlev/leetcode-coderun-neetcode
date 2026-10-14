class Solution {
  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @return {number[]}
   */
  findOrder(numCourses, prerequisites) {
    const adjacencies = Array.from({ length: numCourses }, () => []);
    for (const [a, b] of prerequisites) {
      adjacencies[a].push(b);
    }

    const visiting = new Array(numCourses).fill(false);
    const finished = new Array(numCourses).fill(false);
    const answer = [];

    const dfs = (course) => {
      if (visiting[course]) return false;
      if (finished[course]) return true;

      if (adjacencies[course].length === 0) {
        answer.push(course);
        finished[course] = true;
        return true;
      }

      visiting[course] = true;

      for (const prerequisite of adjacencies[course]) {
        if (!dfs(prerequisite)) return false;
      }

      visiting[course] = false;
      answer.push(course);
      finished[course] = true;

      return true;
    };

    for (let course = 0; course < numCourses; course++) {
      if (!dfs(course)) return [];
    }

    return answer;
  }
}
