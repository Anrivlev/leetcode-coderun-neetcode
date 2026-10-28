class Solution {
  /**
   * @param {number} n
   * @return {number[]}
   */
  countBits(n) {
    const answer = new Array(n + 1).fill(0);
    let oldestBit = 1;
    for (let i = 1; i < n + 1; i++) {
      if (i - oldestBit >= oldestBit) oldestBit *= 2;
      answer[i] = answer[i - oldestBit] + 1;
    }
    return answer;
  }
}
