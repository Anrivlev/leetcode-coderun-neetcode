class PrefixTree {
  constructor() {
    this.root = { children: new Map(), char: null, isWord: false };
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    if (word.length === 0) return;
    let curr = this.root;
    for (const char of word) {
      let next = curr.children.get(char);
      if (!next) {
        next = { children: new Map(), char, isWord: false };
        curr.children.set(char, next);
      }
      curr = next;
    }
    curr.isWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    if (word.length === 0) return false;
    let curr = this.root;
    for (const char of word) {
      curr = curr.children.get(char);
      if (!curr) return false;
    }
    return curr.isWord;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    if (prefix.length === 0) return false;
    let curr = this.root;
    for (const char of prefix) {
      curr = curr.children.get(char);
      if (!curr) return false;
    }
    return true;
  }
}
