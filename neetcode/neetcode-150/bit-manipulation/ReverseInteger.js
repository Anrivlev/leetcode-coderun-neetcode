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

class Solution {
  /**
   * @param {number} x
   * @return {number}
   */
  reverse(x) {
    const MIN = -(2 ** 31);
    const MAX = 2 ** 31 - 1;
    const maxPrefix = Math.trunc(MAX / 10);
    const minPrefix = Math.trunc(MIN / 10);
    const maxSuffix = MAX % 10;
    const minSuffix = MIN % 10;

    let reversedX = 0;

    while (x !== 0) {
      const digit = x % 10;
      x = Math.trunc(x / 10);

      if (
        reversedX > maxPrefix ||
        (reversedX === maxPrefix / 10 && digit > maxSuffix)
      )
        return 0;
      if (
        reversedX < minPrefix ||
        (reversedX === minPrefix && digit < minSuffix)
      )
        return 0;

      reversedX = reversedX * 10 + digit;
    }

    return reversedX;
  }
}
