class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  findMedianSortedArrays(nums1, nums2) {
    let i = 0;
    let j = 0;
    const halfLength = Math.floor((nums1.length + nums2.length) / 2) + 1;
    let median1 = 0;
    let median2 = 0;
    while (i + j < halfLength) {
      median2 = median1;
      if ((nums1[i] <= nums2[j] && i < nums1.length) || j === nums2.length) {
        median1 = nums1[i];
        i++;
      } else {
        median1 = nums2[j];
        j++;
      }
    }
    if ((nums1.length + nums2.length) % 2 === 1) return median1;
    return (median1 + median2) / 2;
  }
}
