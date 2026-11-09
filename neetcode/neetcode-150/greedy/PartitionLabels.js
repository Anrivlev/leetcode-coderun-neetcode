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
    // Нет, помогает. Теперь у меня есть интервалы. Нужно выполнить объединение и вернуть множество результатов.
    // Это задача на merge intervals, уже решал.

    const intervals = Array.from(charPositions.values()).map(
      ({ first, last }) => [first, last],
    );
    intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [];
    for (const interval of intervals) {
      if (
        mergedIntervals.length === 0 ||
        mergedIntervals.at(-1)[1] < interval[0]
      ) {
        mergedIntervals.push(interval);
      } else {
        mergedIntervals.at(-1)[1] = Math.max(
          interval[1],
          mergedIntervals.at(-1)[1],
        );
      }
    }

    return mergedIntervals.map((interval) => interval[1] - interval[0] + 1);
  }
}
