class Solution {
  /**
   * @param {string} S
   * @return {number[]}
   */
  partitionLabels(S) {
    const charPositions = new Map();
    for (let i = 0; i < S.length; i++) {
      const char = S[i];
      let charInterval = charPositions.get(char);
      if (!charInterval) {
        charInterval = [i, i];
        charPositions.set(char, charInterval);
      }
      charInterval[1] = i;
    }
    // Нет, эта информация не помогает.
    // Нет, помогает. Теперь у меня есть интервалы. Нужно выполнить объединение и вернуть множество результатов.
    // Это задача на merge intervals, уже решал.

    const intervals = Array.from(charPositions.values());
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

class Solution {
  /**
   * @param {string} S
   * @return {number[]}
   */
  partitionLabels(S) {
    const charLastIndices = new Map();
    for (let i = 0; i < S.length; i++) {
      const char = S[i];
      charLastIndices.set(char, i);
    }

    const answer = [];
    let currStart = 0;
    let currEnd = 0;
    for (let i = 0; i < S.length; i++) {
      const char = S[i];
      const lastIndex = charLastIndices.get(char);
      currEnd = Math.max(currEnd, lastIndex);
      if (i === currEnd) {
        answer.push(currEnd - currStart + 1);
        currStart = i + 1;
      }
    }

    return answer;
  }
}
