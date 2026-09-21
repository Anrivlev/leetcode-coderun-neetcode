class Solution {
  BRACKET_PAIR = {
    "(": ")",
    ")": "(",
    "{": "}",
    "}": "{",
    "[": "]",
    "]": "[",
  };

  OPENING_BRACKET = new Set(["(", "{", "["]);
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = [];
    for (const char of s) {
      if (this.OPENING_BRACKET.has(char)) {
        stack.push(char);
        continue;
      }
      const prev = stack.pop();
      if (prev !== this.BRACKET_PAIR[char]) return false;
    }
    return stack.length === 0;
  }
}
