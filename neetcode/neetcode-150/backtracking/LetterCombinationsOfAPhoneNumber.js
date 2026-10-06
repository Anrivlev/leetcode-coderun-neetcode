class Solution {
  static DIGITS_TO_CHARS = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  /**
   * @param {string} digits
   * @return {string[]}
   */
  letterCombinations(digits) {
    if (digits.length === 0) return [];
    const answer = [];

    const curr = [];
    let index = 0;

    function backtrack() {
      if (index === digits.length) {
        answer.push(curr.join(""));
        return;
      }

      const digit = digits[index++];
      const chars = Solution.DIGITS_TO_CHARS[digit];
      for (const char of chars) {
        curr.push(char);
        backtrack();
        curr.pop();
      }
      index--;
    }

    backtrack();

    return answer;
  }
}
