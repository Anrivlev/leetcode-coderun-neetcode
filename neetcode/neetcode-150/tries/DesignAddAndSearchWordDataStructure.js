class WordDictionary {
  constructor() {
    this.root = { children: new Map(), char: null, isEndOfWord: false };
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    if (word.length === 0) return;
    let curr = this.root;
    for (const char of word) {
      let next = curr.children.get(char);
      if (!next) {
        next = { children: new Map(), char, isEndOfWord: false };
        curr.children.set(char, next);
      }
      curr = next;
    }
    curr.isEndOfWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    if (word.length === 0) return false;
    return this.searchInNode(word, this.root, 0);
  }

  searchInNode(word, node, index) {
    if (index === word.length) return node.isEndOfWord;
    let curr = node;
    for (let i = index; i < word.length; i++) {
      const char = word[i];
      if (char === ".") {
        for (const child of curr.children.values()) {
          if (this.searchInNode(word, child, i + 1)) return true;
        }
        return false;
      } else {
        curr = curr.children.get(char);
        if (!curr) return false;
      }
    }
    return curr.isEndOfWord;
  }
}
