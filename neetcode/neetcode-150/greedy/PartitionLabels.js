class Solution {
  /**
   * @param {string} S
   * @return {number[]}
   */
  partitionLabels(S) {
    const charPositions = new Map();
    for (let i = 0; i < S.length; i++) {
      const char = S[i];
      let charInfo = charPositions.get(char);
      if (!charInfo) {
        charInfo = { first: i, last: i };
        charPositions.set(char, charInfo);
      }
      charInfo.last = i;
    }
    // Нет, эта информация не помогает.
    // Нет, помогает. Теперь у меня есть интервалы. Нужно выполнить объединение и вернуть множество результатов..
    // Это задача на merge intervals, уже решал.

    const answer = [];

    return answer;
  }
}
