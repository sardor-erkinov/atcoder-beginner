
const sumOfThreeIntegers = (k, s) => {
    const numbersSet = new Set()
    let count = 0
    for (let i = k; i >= 0; i-- ) {
        let tempS = s
        let a = (tempS - i) > k ? k : (tempS - i)
        let b = (tempS - a) > k ? k : (tempS - a)
        let c = (tempS - a - b) > k ? k : (tempS - a - b)
        numbersSet.add(JSON.stringify([a, b, c].sort((a, b) => b - a)));
    }
    [...numbersSet].map((item) => JSON.parse(item)).forEach((item) => {
        if (item[0] === item[1] && item[1] === item[2]) {
            count = count + 1
        } else if (item[0] === item[1] || item[1] === item[2] || item[0] === item[2]) {
            count = count + 3
        } else {
            count = count + 6
        }
    })
    return count
}

console.log(sumOfThreeIntegers(5, 15))

// 1 2 3, 2 1 3, 1 3 2, 2 3 1, 3 1 2, 3 2 1
// 