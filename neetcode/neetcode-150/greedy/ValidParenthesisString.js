class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  checkValidString(s) {
    let stackOpen = [];
    let stackStar = [];
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      switch (char) {
        case "(": {
          stackOpen.push(i);
          break;
        }
        case ")": {
          if (stackOpen.length > 0) {
            stackOpen.pop();
          } else if (stackStar.length > 0) {
            stackStar.pop();
          } else return false;
          break;
        }
        case "*": {
          stackStar.push(i);
          break;
        }
      }
    }
    while (stackOpen.length > 0) {
      if (stackStar.length === 0) return false;
      const openIndex = stackOpen.pop();
      const starIndex = stackStar.pop();
      if (openIndex > starIndex) return false;
    }
    return true;
    // return boolean;
  }
}
