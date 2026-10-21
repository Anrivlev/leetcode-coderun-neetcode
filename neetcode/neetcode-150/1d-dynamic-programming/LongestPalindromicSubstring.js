class Solution {
  /**
   * @param {string} s
   * @return {string}
   */
  longestPalindrome(s) {
    // odd palindromes
    const oddLengths = new Array(s.length).fill(0);
    let oddMaxLength = 0;
    let oddMaxIndex = 0;
    for (let i = 0; i < s.length; i++) {
      let j = 1;
      while (i - j >= 0 && i + j < s.length) {
        if (s[i - j] !== s[i + j]) break;
        oddLengths[i]++;
        if (oddLengths[i] > oddMaxLength) {
          oddMaxLength = oddLengths[i];
          oddMaxIndex = i;
        }
        j++;
      }
    }

    // even palindromes
    const evenLengths = new Array(s.length).fill(0);
    let evenMaxLength = 0;
    let evenMaxIndex = 0;
    for (let i = 0; i < s.length; i++) {
      let j = 1;
      while (i - j + 1 >= 0 && i + j < s.length) {
        if (s[i - j + 1] !== s[i + j]) break;
        evenLengths[i]++;
        if (evenLengths[i] > evenMaxLength) {
          evenMaxLength = evenLengths[i];
          evenMaxIndex = i;
        }
        j++;
      }
    }

    if (oddMaxLength >= evenMaxLength) {
      const startIndex = oddMaxIndex - oddMaxLength;
      return s.slice(startIndex, startIndex + oddMaxLength * 2 + 1);
    } else {
      const startIndex = evenMaxIndex - evenMaxLength + 1;
      return s.slice(startIndex, startIndex + evenMaxLength * 2);
    }
  }
}

console.log(new Solution().longestPalindrome("baba"));
console.log(new Solution().longestPalindrome("ababd"));
console.log(new Solution().longestPalindrome("abbc"));
