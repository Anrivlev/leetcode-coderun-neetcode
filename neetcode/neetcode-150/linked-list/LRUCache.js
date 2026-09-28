class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.head = null;
    this.tail = null;
    this.cache = new Map();
    this.capacity = capacity;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const node = this.cache.get(key);
    if (!node) return -1;
    this.moveNodeToTail(node);
    return node.value;
  }

  moveNodeToTail(node) {
    if (node === this.tail) return;
    if (node === this.head) {
      this.head = this.head.next ?? node;
    }
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    node.prev = this.tail;
    node.next = null;
    if (this.tail) this.tail.next = node;
    this.tail = node;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    const existing = this.cache.get(key);
    if (existing) {
      existing.value = value;
      this.moveNodeToTail(existing);
      return;
    }

    const node = { key, value, next: null, prev: this.tail };
    if (this.tail) this.tail.next = node;
    this.tail = node;
    if (!this.head) this.head = node;

    this.cache.set(key, node);

    if (this.cache.size > this.capacity) {
      this.cache.delete(this.head.key);
      this.head = this.head.next;
      this.head.prev = null;
    }
  }

  toString() {
    const values = [];
    let curr = this.head;
    while (curr) {
      values.push(curr.value);
      curr = curr.next;
    }
    return `[${values.join(", ")}]`;
  }
}

// Test 1
// const lruCache = new LRUCache(2);
// lruCache.put(1, 10);
// lruCache.get(1);
// lruCache.put(2, 20);
// lruCache.put(3, 30);
// lruCache.get(2);
// lruCache.get(1);

// Test 2
const lruCache = new LRUCache(2);
lruCache.put(1, 1);
console.log(lruCache.toString());
lruCache.put(2, 2);
console.log(lruCache.toString());
lruCache.get(1);
console.log(lruCache.toString());
lruCache.put(3, 3);
console.log(lruCache.toString());
lruCache.get(2);
console.log(lruCache.toString());
lruCache.put(4, 4);
console.log(lruCache.toString());
lruCache.get(1);
console.log(lruCache.toString());
lruCache.get(3);
console.log(lruCache.toString());
lruCache.get(4);
console.log(lruCache.toString());
