class Solution {
  /**
   * @param {number} n
   * @return {boolean}
   */
  isHappy(n) {
    if (n === 1) return true;
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

class Solution {
  /**
   * @param {number} n
   * @return {boolean}
   */
  isHappy(n) {
    if (n === 1) return true;
    let slow = n;
    let fast = this.getNext(slow);
    while (slow !== fast) {
      slow = this.getNext(slow);
      fast = this.getNext(fast);
      if (fast === 1) return true;
      fast = this.getNext(fast);
      if (fast === 1) return true;
    }
    return false;
  }

  getNext(n) {
    return n
      .toString(10)
      .split("")
      .map((char) => +char * +char)
      .reduce((prev, curr) => prev + curr, 0);
  }
}
