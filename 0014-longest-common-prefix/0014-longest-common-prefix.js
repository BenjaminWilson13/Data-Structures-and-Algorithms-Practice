/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commons = strs[0]; 
    for (let x = 1; x < strs.length; x++) {
        console.log(commons)
        while (commons.length) {
            if (strs[x].startsWith(commons)) {
                break
            } else {
                commons = commons.slice(0, (commons.length - 1))
            }
        }
    }
    return commons
};