/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const index =  nums.findIndex(num => {
        return num >= target
    })
    if (index < 0) {
        return nums.length; 
    } else {
        return index; 
    }
};