/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []; 
    const openers = '({['; 
    const closers = ']})'; 
    for (let letter of s) {
        if (openers.includes(letter)) {
            stack.push(letter)
        } else if (closers.includes(letter)) {
            if (stack.length === 0) return false; 
            const tester = stack.pop(); 
            if (tester === '(' && letter !== ')') {
                return false; 
            } else if (tester === '[' && letter !== ']') {
                return false; 
            } else if (tester === '{' && letter !== '}') {
                return false; 
            }
        }
    }
    if (stack.length > 0) return false; 
    return true; 
};