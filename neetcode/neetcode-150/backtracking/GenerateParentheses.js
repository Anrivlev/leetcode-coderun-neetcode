class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    const answer = [];

    let curr = [];
    let openCount = 0;
    let unclosedCount = 0;

    function backtrack() {
      if (curr.length === 2 * n) {
        answer.push(curr.join(""));
        return;
      }
      if (unclosedCount > 0) {
        curr.push(")");
        unclosedCount--;
        backtrack();
        curr.pop();
        unclosedCount++;
      }
      if (openCount < n) {
        curr.push("(");
        openCount++;
        unclosedCount++;
        backtrack();
        curr.pop();
        openCount--;
        unclosedCount--;
      }
    }

    backtrack();

    return answer;
  }
}
