
/**
 * You are given a string 
S consisting of digits between 1 and 9, inclusive. You can insert the letter + into some of the positions (possibly none) between two letters in this string. Here, + must not occur consecutively after insertion.

All strings that can be obtained in this way can be evaluated as formulas.

Evaluate all possible formulas, and print the sum of the results.
 * @param {number} num 
 * @returns {number}
 */
const manyFormulas = (num) => {
    let result = num
    let strNum = num.toString()
    let arrResult = []
    const split_at_index= (value, index) => {
        return Number(value.substring(0, index)) + Number(value.substring(index));
    }
    const lengthNumMinusOne = strNum.length - 1
    arrResult.push(strNum.split('').map(Number).reduce((acc, cur) => acc + cur, 0))
    arrResult.push(num)
    for (let index = 0; index < lengthNumMinusOne; index++) {
        let item = strNum[index]
        arrResult.push(split_at_index(strNum,index+1))
    }

    return arrResult.reduce((acc, cur) => acc + cur, 0)
}

manyFormulas(1252)

// 1 + 252 | 12 + 52 | 125 + 2 | 1 + 2 + 5 + 2

console.log(manyFormulas(125))

// 1 + 2523 | 12 + 523 | 125 + 23 | 1252 + 3 | 1 + 2 + 5 + 2 + 3