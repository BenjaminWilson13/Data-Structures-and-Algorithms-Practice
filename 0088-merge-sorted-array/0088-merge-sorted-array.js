/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (n === 0) {
        return; 
    }
    if (m === 0) {
        nums1.splice(0)
    }
    nums1.splice(m, n);
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
};