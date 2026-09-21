class MinStack {
  constructor() {
    this.stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    const minimum = Math.min(val, this.stack.at(-1)?.minimum ?? Infinity);
    this.stack.push({ value: val, minimum });
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack.at(-1).value;
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.stack.at(-1).minimum;
  }
}
