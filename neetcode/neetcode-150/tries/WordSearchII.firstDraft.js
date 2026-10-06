class Solution {
  /**
   * @param {character[][]} board
   * @param {string[]} words
   * @return {string[]}
   */
  findWords(board, words) {
    const root = { children: new Map(), char: null };
    const n = board.length;
    const m = board[0].length;
    const table = Array.from({ length: n }, () => new Array(m).fill(null));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        const char = board[i][j];
        table[i][j] = { children: new Map(), char, i, j };

        let array = root.children.get(char);
        if (array === undefined) {
          array = [];
          root.children.set(char, array);
        }
        array.push(table[i][j]);
      }
    }

    const deltas = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        for (const delta of deltas) {
          const i2 = i + delta[0];
          const j2 = j + delta[1];
          if (i2 < 0 || j2 < 0 || i2 >= n || j2 >= m) continue;
          let array = table[i][j].children.get(table[i2][j2].char);
          if (!array) {
            array = [];
            table[i][j].children.set(table[i2][j2].char, array);
          }
          array.push(table[i2][j2]);
        }
      }
    }

    const foundWords = [];

    for (const word of words) {
      const visited = new Set();
      function backtrack(i, curr) {
        if (i === word.length) return true;

        const char = word[i];
        const nextArray = curr.children.get(char);
        if (!nextArray) return false;
        for (const next of nextArray) {
          if (visited.has(next)) continue;
          visited.add(next);
          const isFound = backtrack(i + 1, next);
          if (isFound) return true;
          visited.delete(next);
        }
      }
      if (backtrack(0, root)) foundWords.push(word);
    }

    return foundWords;
  }
}
