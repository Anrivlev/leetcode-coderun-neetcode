class Solution {
  /**
   * @param {string} s
   * @param {string[]} wordDict
   * @return {boolean}
   */
  wordBreak(s, wordDict) {
    const root = {
      children: new Map(),
      char: null,
      word: null,
      isEndOfWord: false,
    };
    for (const word of wordDict) {
      let curr = root;
      for (const char of word) {
        let next = curr.children.get(char);
        if (!next) {
          next = { children: new Map(), char, word: null, isEndOfWord: false };
          curr.children.set(char, next);
        }
        curr = next;
      }
      curr.isEndOfWord = true;
      curr.word = word;
    }

    const reached = new Set();
    reached.add(0);

    const stack = [0];
    while (stack.length > 0) {
      const startIndex = stack.pop();
      if (startIndex === s.length) return true;
      const words = [];
      let curr = root;
      let i = startIndex;
      for (; i < s.length; i++) {
        const char = s[i];
        const next = curr.children.get(char);
        if (!next) break;
        if (next.isEndOfWord) words.push(next.word);
        curr = next;
      }
      for (const word of words) {
        const nextIndex = startIndex + word.length;
        if (reached.has(nextIndex)) continue;
        reached.add(nextIndex);
        stack.push(nextIndex);
      }
    }
    return false;
  }
}

console.log(new Solution().wordBreak("neetcode", ["neet", "code"]));
console.log(new Solution().wordBreak("neetcode", ["neet", "cde"]));
