/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.sort((a, b) => {
        if (b === val) {
            return -1; 
        } else {
            return 0; 
        }
    })
    let count = 0; 
    for (let element of nums) {
        if (element !== val) {
            count++; 
        }
    }
    return count; 
    console.log(nums)
};