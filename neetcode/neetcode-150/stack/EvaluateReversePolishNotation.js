class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const stack = [];
    for (const token of tokens) {
      switch (token) {
        case "+": {
          const b = stack.pop();
          const a = stack.pop();
          stack.push(a + b);
          break;
        }
        case "-": {
          const b = stack.pop();
          const a = stack.pop();
          stack.push(a - b);
          break;
        }
        case "/": {
          const b = stack.pop();
          const a = stack.pop();
          const result = a / b;
          stack.push(result > 0 ? Math.floor(result) : Math.ceil(result));
          break;
        }
        case "*": {
          const b = stack.pop();
          const a = stack.pop();
          stack.push(a * b);
          break;
        }
        default: {
          stack.push(Number.parseInt(token));
        }
      }
    }
    return stack.at(-1);
  }
}

console.log(
  new Solution().evalRPN([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ]),
);
