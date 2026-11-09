class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    if (s.length < t.length) return "";
    const frequencies = new Map();
    for (const char of t) {
      frequencies.set(char, (frequencies.get(char) ?? 0) + 1);
    }

    let charCount = frequencies.size;

    let minWindowSizeIndex = -1;
    let minWindowSize = Infinity;

    let left = 0;
    let right = 0;
    while (right < s.length) {
      const char = s[right];
      const frequency = frequencies.get(char);
      if (frequency !== undefined) {
        const nextFrequency = frequency - 1;
        frequencies.set(char, nextFrequency);
        if (nextFrequency === 0) charCount--;
        if (charCount === 0) {
          let leftFrequency = frequencies.get(s[left]);
          while (leftFrequency === undefined || leftFrequency < 0) {
            if (leftFrequency !== undefined) {
              const nextLeftFrequency = leftFrequency + 1;
              frequencies.set(s[left], nextLeftFrequency);
            }
            left++;
            leftFrequency = frequencies.get(s[left]);
          }
          const windowSize = right - left + 1;
          if (windowSize < minWindowSize) {
            minWindowSizeIndex = left;
            minWindowSize = windowSize;
          }
        }
      }
      right++;
    }

    return minWindowSizeIndex === -1
      ? ""
      : s.slice(minWindowSizeIndex, minWindowSizeIndex + minWindowSize);
  }
}

console.log(new Solution().minWindow("OUZODYXAZV", "XYZ"));
