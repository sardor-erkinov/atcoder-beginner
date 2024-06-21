/**
 * Generates a function comment for the given function body in a markdown code block with the correct language syntax.
 *
 * @param {string} text - the function body to generate a comment for
 * @return {undefined} - there is no return value
 */

/***
 * Let 
    w be a string consisting of lowercase letters. We will call 
    w beautiful if the following condition is satisfied:

    Each lowercase letter of the English alphabet occurs even number of times in 
    w.
    You are given the string 
    w. Determine if 
    w is beautiful.
 */

const beautifulStrings = (text) => {
    const code = {}
    text.split('').forEach(char => {
        if (code[char]) {
            code[char]++
        } else {
            code[char] = 1
        }
    })

    const result = Object.values(code).find((value) => value % 2 !== 0)
    return result ? 'No' : 'Yes'
}

console.log(beautifulStrings('thth'))