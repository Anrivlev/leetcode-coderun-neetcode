class Solution {
  /**
   * @param {string} s
   * @return {string}
   */
  longestPalindrome(s) {
    // odd palindromes
    let oddMaxRadius = 0;
    let oddMaxIndex = 0;
    for (let i = 0; i < s.length; i++) {
      let j = 1;
      let radius = 0;
      while (i - j >= 0 && i + j < s.length) {
        if (s[i - j] !== s[i + j]) break;
        radius++;
        if (radius > oddMaxRadius) {
          oddMaxRadius = radius;
          oddMaxIndex = i;
        }
        j++;
      }
    }

    // even palindromes
    let evenMaxRadius = 0;
    let evenMaxIndex = 0;
    for (let i = 0; i < s.length; i++) {
      let j = 1;
      let radius = 0;
      while (i - j + 1 >= 0 && i + j < s.length) {
        if (s[i - j + 1] !== s[i + j]) break;
        radius++;
        if (radius > evenMaxRadius) {
          evenMaxRadius = radius;
          evenMaxIndex = i;
        }
        j++;
      }
    }

    if (oddMaxRadius >= evenMaxRadius) {
      const startIndex = oddMaxIndex - oddMaxRadius;
      return s.slice(startIndex, startIndex + oddMaxRadius * 2 + 1);
    } else {
      const startIndex = evenMaxIndex - evenMaxRadius + 1;
      return s.slice(startIndex, startIndex + evenMaxRadius * 2);
    }
  }
}

console.log(new Solution().longestPalindrome("baba"));
console.log(new Solution().longestPalindrome("ababd"));
console.log(new Solution().longestPalindrome("abbc"));
