class Solution {
  /**
   * @param {character[][]} board
   * @param {string[]} words
   * @return {string[]}
   */
  findWords(board, words) {
    const root = {
      char: null,
      children: new Map(),
      isEndOfWord: false,
      isFound: false,
    };
    for (const word of words) {
      let curr = root;
      for (const char of word) {
        let next = curr.children.get(char);
        if (!next) {
          next = {
            char,
            children: new Map(),
            isEndOfWord: false,
            isFound: false,
          };
          curr.children.set(char, next);
        }
        curr = next;
      }
      curr.isEndOfWord = true;
    }

    const n = board.length;
    const m = board[0].length;

    const visited = Array.from({ length: n }, () => new Array(m).fill(false));

    const foundWords = [];

    const directions = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    function backtrack(i, j, curr, word) {
      word.push(curr.char);
      visited[i][j] = true;

      if (curr.isEndOfWord && !curr.isFound) {
        curr.isFound = true;
        foundWords.push(word.join(""));
      }

      for (const direction of directions) {
        const i2 = i + direction[0];
        const j2 = j + direction[1];
        if (i2 < 0 || j2 < 0 || i2 >= n || j2 >= m || visited[i2][j2]) continue;
        const char = board[i2][j2];
        const next = curr.children.get(char);
        if (!next) continue;
        backtrack(i2, j2, next, word);
      }

      word.pop();
      visited[i][j] = false;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        const char = board[i][j];
        let curr = root.children.get(char);
        if (curr) {
          backtrack(i, j, curr, []);
        }
      }
    }

    return foundWords;
  }
}

// const board = [
//   ["o", "a", "a", "n"],
//   ["e", "t", "a", "e"],
//   ["i", "h", "k", "r"],
//   ["i", "f", "l", "v"],
// ];
// const words = ["oath", "pea", "eat", "rain", "oate"];

// console.log(new Solution().findWords(board, words));

const board = [["a"]];
const words = ["a"];

console.log(new Solution().findWords(board, words));
