/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    console.log(n)
    n = n.toString(2)
    const ones = n.split('').filter(num => num === '1')
    console.log(ones)
    return ones.length; 
};