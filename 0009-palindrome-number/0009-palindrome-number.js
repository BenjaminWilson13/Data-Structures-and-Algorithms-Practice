/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(num) {
    let reverse = num.toString().split('').reverse().join(''); 
    let forward = num.toString(); 
    return reverse == forward

};