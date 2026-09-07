class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    if (s.length === 0) return 0;
    let maxLength = 0;
    let left = 0;
    let right = 0;
    const visited = new Set();
    while (right < s.length) {
      let char = s[right];
      if (visited.has(char)) {
        let leftChar;
        do {
          leftChar = s[left];
          visited.delete(leftChar);
          left++;
        } while (leftChar !== char);
      }
      visited.add(char);
      const length = right - left + 1;
      if (length > maxLength) maxLength = length;
      right++;
    }
    return maxLength;
  }
}

console.log(new Solution().lengthOfLongestSubstring("abba"));
console.log(new Solution().lengthOfLongestSubstring("abcabcbb"));
console.log(new Solution().lengthOfLongestSubstring(" "));
console.log(new Solution().lengthOfLongestSubstring("dvdf"));
