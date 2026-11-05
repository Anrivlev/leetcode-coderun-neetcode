// class Solution {
//   /**
//    * Решение не прошло из-за ограничений double (float64| js:number)
//    * @param {string} num1
//    * @param {string} num2
//    * @return {string}
//    */
//   multiply(num1, num2) {
//     let product = 0;
//     for (let i = num1.length - 1; i >= 0; i--) {
//       const digit1 = +num1[i];
//       for (let j = num2.length - 1; j >= 0; j--) {
//         const digit2 = +num2[j];
//         const degree = num1.length - i + num2.length - j - 2;
//         product += digit1 * digit2 * 10 ** degree;
//       }
//     }

//     return product.toString(10);
//   }
// }

// class Solution {
//   /**
//    * Чит-решение через BigInt
//    * @param {string} num1
//    * @param {string} num2
//    * @return {string}
//    */
//   multiply(num1, num2) {
//     let product = BigInt(0);
//     for (let i = num1.length - 1; i >= 0; i--) {
//       const digit1 = BigInt(num1[i]);
//       for (let j = num2.length - 1; j >= 0; j--) {
//         const digit2 = BigInt(num2[j]);
//         product +=
//           digit1 *
//           digit2 *
//           BigInt(10) ** BigInt(num1.length + num2.length - 2 - i - j);
//       }
//     }

//     return product.toString(10);
//   }
// }

class Solution {
  /**
   * Честное решение
   * @param {string} num1
   * @param {string} num2
   * @return {string}
   */
  multiply(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";
    const product = new Array(num1.length + num2.length).fill(0);

    const add = (value, index) => {
      let remainder = value;
      let curr = index;
      while (remainder > 0) {
        const sum = remainder + product[curr];
        product[curr] = sum % 10;
        remainder = Math.floor(sum / 10);
        curr--;
      }
    };

    for (let i = num1.length - 1; i >= 0; i--) {
      const d1 = +num1[i];
      for (let j = num2.length - 1; j >= 0; j--) {
        const d2 = +num2[j];
        const index = i + j + 1;
        const subProduct = d1 * d2;
        add(subProduct, index);
      }
    }
    if (product[0] === 0) return product.slice(1).join("");
    return product.join("");
  }
}

console.log(new Solution().multiply("10", "10"));
console.log(new Solution().multiply("1", "981"));
console.log(new Solution().multiply("10", "987"));
console.log(new Solution().multiply("99", "99"));
