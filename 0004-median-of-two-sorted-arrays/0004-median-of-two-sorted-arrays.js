/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const array = [...nums1, ...nums2].sort((a, b) => a - b); 

    if (array.length % 2 !== 0) {
        return array[(array.length - 1) / 2]
    } else {
        return (array[Math.floor((array.length - 1) / 2)] + array[Math.ceil((array.length - 1) / 2)]) / 2
    }
};