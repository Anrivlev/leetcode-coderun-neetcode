class Solution {
  /**
   * @param {number} n
   * @return {number}
   */
  climbStairs(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;
    let curr = 1;
    let prev = 1;
    for (let i = 1; i < n; i++) {
      const next = curr + prev;
      prev = curr;
      curr = next;
    }
    return curr;
  }
}
