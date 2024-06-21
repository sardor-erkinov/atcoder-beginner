/**
 * 
 * @param {number} a 
 * @param {bigint} b 
 * @param {number} x 
 * @returns 
 */
const betweenTwoNumbers = (numA, b, numX) => {
    const x = BigInt(numX)
    const a = BigInt(numA)

    if ((a % x) === 0 ) {
        return ((b / x) - ((a / x)) + 1n).toString()
    }
    return ((b / x) - (a / x)).toString()
}

console.log(betweenTwoNumbers(1, 1000000000000000000n, 3))