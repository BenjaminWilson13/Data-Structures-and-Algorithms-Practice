/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const array = s.split(' ').filter(element => {
        if (element === '' || element === ' ') {
            return false; 
        } else {
            return true; 
        }
    }); 
    console.log(array)
    return array[array.length - 1].length; 
};