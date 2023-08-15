/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = ''
    const letters = 'abcdefghijklmnopqrstuvwxyz1234567890'
    for (let element of s) {
        if (letters.includes(element.toLowerCase())) string+= element.toLowerCase()
    }
    console.log(string)
    const stringArray = string.split(''); 
    console.log(stringArray)
    const stringArrayReversed = stringArray.reverse(); 
    const compareString = stringArrayReversed.join(''); 
    console.log(string, compareString)
    return string === compareString
};