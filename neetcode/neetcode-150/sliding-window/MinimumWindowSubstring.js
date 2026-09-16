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
    let readyCounter = frequencies.size;
    let minWindowSize = Infinity;
    let indices = [-1, -1];
    while (right < s.length) {
      s[right];
      const frequency = (frequencies.get(s[right]) ?? 0) + 1;
      if (frequency === 0) readyCounter--;
      while (readyCounter === 0) {
        
        left++;
      }
      right++;
      if (readyCounter === 0 && right - left + 1 < minWindowSize)
        minWindowSize = right - left + 1;
    }
    return minWindowSize === Infinity ? '' : s.slice(indices[0], indices[1] + 1);
  }
}
