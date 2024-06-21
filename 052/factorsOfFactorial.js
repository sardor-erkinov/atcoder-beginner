

const factorsOfFactorial = (num) => {
    let amounts = []
    let counter = 1
    let divisor = 2

    for (let i = 1; num >= i; i++) {
        counter = counter * i
    }

    while (counter >= 2) {
        if (counter % divisor === 0) {
            let foundIndex = amounts.findIndex((item) => item.value === divisor)
            if (foundIndex > -1) {
                amounts[foundIndex].amount = amounts[foundIndex].amount + 1
            } else {
                amounts.push({ amount: 1, value: divisor })
            }
            counter = counter / divisor
        } else {
            divisor++
        }
    }

    return amounts.reduce((acc, cur) => acc * (cur.amount + 1), 1)
}


// 6!
// 2 * 3 * 4 * 5 * 6 = 2 ^ 4 * 3 ^ 2 * 5 ^ 1
//                 |      \      |     
//                 4      2      1 
//                 +      +      +   = 5 * 3 * 2 = 30 // output
//                 1      1      1   

console.log(factorsOfFactorial(6))