class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  numDecodings(s) {
    if (s.length === 0) return 0;
    if (s[0] === "0") return 0;
    let countIfLastGlued = 0;
    let countIfNot = 1;

    const sInts = s.split("").map((val) => +val);
    for (let i = 1; i < sInts.length; i++) {
      const sInt = sInts[i];
      const gluedInt = sInts[i - 1] * 10 + sInt;
      const isAddable = sInt !== 0;
      const isGluable = i > 0 && gluedInt >= 10 && gluedInt <= 26;
      if (!isAddable && !isGluable) return 0;
      const countIfLastGluedTmp = isGluable ? countIfNot : 0;
      countIfNot = isAddable ? countIfNot + countIfLastGlued : 0;
      countIfLastGlued = countIfLastGluedTmp;
    }

    return countIfLastGlued + countIfNot;
  }
}
