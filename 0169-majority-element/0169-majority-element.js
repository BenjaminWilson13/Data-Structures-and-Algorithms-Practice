/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {}; 
    for (let num of nums) {
        if (obj[num] === undefined) obj[num] = 0; 
        obj[num]++ 
    }

    console.log(obj)
    let highestFrequency = 0; 
    let highestNum = undefined; 

    for (let element of Object.keys(obj)) {
        if (obj[element] > highestFrequency) {
            highestFrequency = obj[element]; 
            highestNum = element; 
        }
    }
    return highestNum; 
};