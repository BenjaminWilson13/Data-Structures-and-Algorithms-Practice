/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // console.log(nums)
    // let count = 0
    // for (let x = 0; x < nums.length - 1; x++) {
    //     if (nums[x] === nums[x + 1] && nums[x] !== null) {
    //         for (let y = x + 1; y < nums.length - 1; y++) {
    //             nums[y] = nums[y + 1]
    //         }
    //         console.log(nums) 
    //         nums[nums.length - 1] = null; 
    //         count++; 
    //         x--; 
    //     }
    // }
    // console.log(count)
    // return nums.length - count

    const test = new Set(nums)
    let i = 0; 
    test.forEach(num => {
        nums[i] = num; 
        i++; 
    })
    return test.size; 
};