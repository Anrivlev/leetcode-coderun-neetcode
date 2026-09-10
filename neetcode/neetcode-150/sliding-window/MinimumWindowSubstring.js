class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    const frequencies = new Map();
    for (const char of t) {
      frequencies.set(char, (frequencies.get(char) ?? 0) - 1);
    }
    let left = 0;
    let right = 0;
    while (right < s.length) {
        
    }
  }
}
