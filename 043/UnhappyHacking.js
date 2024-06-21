 

/**
 * Generates a function comment for the given function body.
 *
 * @param {string} str - the input string
 * @return {undefined} no return value
 */
 const unhappyHacking = (str) => {
    let newStr = ''
    str.split('').forEach((char, index) => {
        if (str[index + 1] !== 'B' && str[index] !== 'B') {
            newStr = `${newStr}${char}`
        }
    })
    return newStr
 }

 console.log({unhappyHacking: unhappyHacking('B000B12B')})