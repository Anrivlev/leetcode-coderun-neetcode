class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    if (s2.length < s1.length) return false;
    const frequencies = new Map();
    for (const char of s1) {
      frequencies.set(char, (frequencies.get(char) ?? 0) - 1);
    }
    for (let right = 0; right < s1.length; right++) {
      const char = s2[right];
      const frequency = (frequencies.get(char) ?? 0) + 1;
      if (frequency === 0) frequencies.delete(char);
      else frequencies.set(char, frequency);
    }
    let left = 0;
    let right = s1.length;
    while (right < s2.length) {
      if (frequencies.size === 0) return true;
      const leftChar = s2[left];
      const rightChar = s2[right];

      const leftFrequency = (frequencies.get(leftChar) ?? 0) - 1;
      if (leftFrequency === 0) frequencies.delete(leftChar);
      else frequencies.set(leftChar, leftFrequency);

      const rightFrequency = (frequencies.get(rightChar) ?? 0) + 1;
      if (rightFrequency === 0) frequencies.delete(rightChar);
      else frequencies.set(rightChar, rightFrequency);

      left++;
      right++;
    }
    return frequencies.size === 0;
  }
}
