class Solution {
  /**
   * Решение не работает. в circleSwap неправильные индексы.
   * @param {number[][]} matrix
   * @return {void}
   */
  rotate(matrix) {
    const n = matrix.length;
    if (n < 2) return;

    // Задумка разумная, но я не знаю, как вычислить индексы в круге. Можно вывести формул из тригонометрии, но это выглядит слишком длинно и тяжеловесно.
    const circleSwap = (i, j) => {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[n - i - 1][j];
      matrix[n - i - 1][j] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = tmp;
    };

    for (let j = 0; j < Math.floor(n / 2); j++) {
      for (let i = j; i < n - j - 1; i++) {
        console.log(i, j);
        circleSwap(i, j);
      }
    }
  }
}

const m1 = [
  [1, 2],
  [3, 4],
];
new Solution().rotate(m1);
console.log(m1);

const m2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
new Solution().rotate(m2);
console.log(m2);
