class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  countSubstrings(s) {
    let palindromeCount = 0;
    // odd palindromes
    for (let i = 0; i < s.length; i++) {
      let j = 1;
      palindromeCount++;
      while (i - j >= 0 && i + j < s.length) {
        if (s[i - j] !== s[i + j]) break;
        palindromeCount++;
        j++;
      }
    }

    // even palindromes
    for (let i = 0; i < s.length; i++) {
      let j = 1;
      while (i - j + 1 >= 0 && i + j < s.length) {
        if (s[i - j + 1] !== s[i + j]) break;
        palindromeCount++;
        j++;
      }
    }

    return palindromeCount;
  }
}
