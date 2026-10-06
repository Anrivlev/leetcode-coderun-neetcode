class Solution {
  /**
   * @param {string} s
   * @return {string[][]}
   */
  partition(s) {
    const res = [];

    const currentArray = [];
    let currentString = [];
    let index = 0;

    function backtrack() {
      if (index === s.length) {
        if (currentString.length === 0) {
          const copiedArray = currentArray.slice();
          if (currentString.length > 0)
            copiedArray.push(currentString.join(""));
          res.push(copiedArray);
        }

        return;
      }

      const char = s[index++];
      currentString.push(char);
      backtrack();

      if (Solution.isPalindrome(currentString)) {
        currentArray.push(currentString.join(""));
        const prev = currentString;
        currentString = [];
        backtrack();
        currentArray.pop();
        currentString = prev;
      }

      currentString.pop();
      index--;
    }

    backtrack();

    return res;
  }

  static isPalindrome(strArray) {
    if (strArray.length === 0) return false;
    for (let i = 0; i < strArray.length / 2; i++) {
      if (strArray[i] !== strArray.at(-1 - i)) return false;
    }
    return true;
  }
}

console.log(new Solution().partition("aab"));
