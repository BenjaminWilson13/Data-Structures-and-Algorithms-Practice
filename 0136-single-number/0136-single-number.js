/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {}; 
    for (let num of nums) {
        if (obj[num] === undefined) {
            obj[num] = 0; 
        }
        obj[num]++
    }
    console.log(obj)
    for (let element of Object.keys(obj)) {
        if (obj[element] === 1) return element; 
    }
};