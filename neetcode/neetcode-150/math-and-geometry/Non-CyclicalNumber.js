class Solution {
  /**
   * @param {number} n
   * @return {boolean}
   */
  isHappy(n) {
    const numbers = new Set();
    while (!numbers.has(n)) {
      numbers.add(n);
      n = n
        .toString(10)
        .split("")
        .map((char) => +char * +char)
        .reduce((prev, curr) => prev + curr, 0);
      if (n === 1) return true;
    }
    return false;
  }
}
