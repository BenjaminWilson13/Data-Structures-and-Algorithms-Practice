/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let string = ''; 
    let string2 = ''; 
    let count = 0; 
    let obj = {}; 
    for (let letter of s) {
        if (obj[letter] === undefined) {
            obj[letter] = count.toString(); 
            string += count + ' '; 
            count++; 
        } else {
            string += obj[letter] + ' '; 
        }
    }
    count = 0;
    obj = {}; 
    for (let letter of t) {
        if (obj[letter] === undefined) {
            obj[letter] = count.toString(); 
            string2 += count + ' '; 
            count++; 
        } else {
            string2 += obj[letter] + ' '; 
        }
    }
    return string === string2
};