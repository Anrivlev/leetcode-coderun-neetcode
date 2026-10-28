class Solution {
  /**
   * @param {number} x
   * @return {number}
   */
  reverse(x) {
    const isNegative = x < 0;
    let reversedX = Number.parseInt(
      Math.abs(x).toString(10).split("").reverse().join(""),
      10,
    );
    if (isNegative) reversedX *= -1;
    if (reversedX > 2 ** 31 - 1 || reversedX < -(2 ** 31)) return 0;
    return reversedX;
  }
}
