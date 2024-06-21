/**
 * Generates a function comment for the given function body.
 *
 * @param {string} text - the input string
 * @return {undefined} no return value
 */
/*
Given a string 
t, we will call it unbalanced if and only if the length of 
t is at least 
2, and more than half of the letters in 
t are the same. For example, both voodoo and melee are unbalanced, while neither noon nor a is.

You are given a string 
s consisting of lowercase letters. Determine if there exists a (contiguous) substring of 
s that is unbalanced. If the answer is positive, show a position where such a substring occurs in 
s.
*/
const unbalanced = (text) => {
    const cache = {}
    const countsOfChar = text.split('').forEach((char, index) => {
        if (char in cache) {
            cache[char]++
        } else {
            cache[char] = 1
        }
    })

    const maxCharAmountIndex = Object.values(cache).findIndex((charAmount) => {
        return charAmount >= Math.ceil(text.length / 2)
    })

    if (maxCharAmountIndex > -1) {
        return [text.indexOf(Object.keys(cache)[maxCharAmountIndex]) + 1, text.lastIndexOf(Object.keys(cache)[maxCharAmountIndex]) + 1]
    }
    return [-1, -1]
}

console.log({unbalanced: unbalanced('nde')})