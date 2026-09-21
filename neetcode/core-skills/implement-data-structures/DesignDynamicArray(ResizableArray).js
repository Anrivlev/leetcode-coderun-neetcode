class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
    this.array = new Array(capacity);
    this.capacity = capacity;
    this.size = 0;
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    return this.array.at(i);
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
    if (i > this.size) this.size = i + 1;
    this.array[i] = n;
  }

  /**
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
    if (this.size + 1 > this.capacity) this.resize();
    this.array[this.size] = n;
    this.size++;
  }

  /**
   * @returns {number}
   */
  popback() {
    this.size--;
    return this.array[this.size];
  }

  /**
   * @returns {void}
   */
  resize() {
    this.capacity *= 2;
    const newArray = new Array(this.capacity);
    newArray.splice(0, this.size, ...this.array);
    this.array = newArray;
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.size;
  }

  /**
   * @returns {number}
   */
  getCapacity() {
    return this.capacity;
  }
}

const dynamicArray = new DynamicArray(1);
console.log(dynamicArray.getSize());
console.log(dynamicArray.getCapacity());
console.log(dynamicArray.pushback(1));
console.log(dynamicArray.getSize());
console.log(dynamicArray.getCapacity());
console.log(dynamicArray.pushback(2));
console.log(dynamicArray.getSize());
console.log(dynamicArray.getCapacity());
console.log(dynamicArray.get(1));
console.log(dynamicArray.set(1, 3));
console.log(dynamicArray.get(1));
console.log(dynamicArray.popback());
console.log(dynamicArray.getSize());
console.log(dynamicArray.getCapacity());
