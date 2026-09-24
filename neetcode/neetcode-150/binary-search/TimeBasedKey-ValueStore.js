class TimeMap {
  constructor() {
    this.keyStore = new Map();
  }

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key, value, timestamp) {
    const previousValues = this.keyStore.get(key);
    if (previousValues === undefined)
      this.keyStore.set(key, [{ value, timestamp }]);
    else previousValues.push({ value, timestamp });
  }

  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string}
   */
  get(key, timestamp) {
    const values = this.keyStore.get(key);
    if (!values) return "";
    let left = 0;
    let right = values.length - 1;
    let result = "";
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (values[mid].timestamp <= timestamp) {
        result = values[mid].value;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }
}