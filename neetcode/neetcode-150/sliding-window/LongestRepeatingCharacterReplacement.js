class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    let left = 0;
    const frequencies = new Map();
    let maxFrequency = 0;
    let maxLength = 0;
    for (let right = 0; right < s.length; right++) {
      const frequency = frequencies.get(s[right]) ?? 0;
      const newFrequency = frequency + 1;
      frequencies.set(s[right], newFrequency);
      if (newFrequency > maxFrequency) {
        maxFrequency = newFrequency;
      }
      while (right - left + 1 - maxFrequency - k > 0) {
        const frequency = frequencies.get(s[left]) ?? 0;
        if (frequency === maxFrequency) maxFrequency--;
        frequencies.set(s[left], frequency - 1);
        left++;
      }
      maxLength = Math.max(
        Math.min(maxFrequency + k, right - left + 1),
        maxLength,
      );
    }
    return maxLength;
  }
}

console.log(new Solution().characterReplacement("XYYX", 2));
console.log(new Solution().characterReplacement("AABABBA", 1));
console.log(new Solution().characterReplacement("BAAA", 0));
