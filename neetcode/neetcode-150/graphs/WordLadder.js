class Solution {
  /**
   * @param {string} beginWord
   * @param {string} endWord
   * @param {string[]} wordList
   * @return {number}
   */
  ladderLength(beginWord, endWord, wordList) {
    // Проверка, что endWord есть в wordList
    if (wordList.every((word) => word !== endWord)) return 0;

    const root = {
      children: new Map(),
      char: null,
      isWordEnd: false,
      isVisited: false,
      word: null,
    };

    // Добавлям все слова в Trie
    for (const word of wordList) {
      let curr = root;
      for (const char of word) {
        let next = curr.children.get(char);
        if (!next) {
          next = {
            children: new Map(),
            char,
            isWordEnd: false,
            isVisited: false,
            word: null,
          };
          curr.children.set(char, next);
        }
        curr = next;
      }
      curr.isWordEnd = true;
      curr.word = word;
    }

    function getTail(word, index, node) {
      for (let i = index; i < word.length; i++) {
        node = node.children.get(word[i]);
        if (!node) return null;
      }
      if (node.isVisited || !node.isWordEnd) return null;
      node.isVisited = true;
      return node.word;
    }

    function getAdjacentWords(word) {
      const adjacentWords = [];
      let curr = root;
      for (let i = 0; i < word.length; i++) {
        for (const child of curr.children.values()) {
          if (child.char === word[i]) continue;
          const newWord = getTail(word, i + 1, child);
          if (newWord) adjacentWords.push(newWord);
        }
        curr = curr.children.get(word[i]);
        if (!curr) return adjacentWords;
      }
      return adjacentWords;
    }

    const queue = [{ word: beginWord, distance: 1 }];
    let head = 0;
    while (head < queue.length) {
      const { word, distance } = queue[head++];
      const adjacentWords = getAdjacentWords(word);
      for (const adjacent of adjacentWords) {
        if (adjacent === endWord) return distance + 1;
        queue.push({ word: adjacent, distance: distance + 1 });
      }
    }
    return 0;
  }
}

console.log(
  new Solution().ladderLength("cat", "sag", [
    "bat",
    "bag",
    "sag",
    "dag",
    "dot",
  ]),
);
