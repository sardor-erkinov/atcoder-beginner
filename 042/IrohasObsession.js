/*
Iroha is very particular about numbers. There are 
K digits that she dislikes: 
D 
1
​
 ,D 
2
​
 ,...,D 
K

She is shopping, and now paying at the cashier. Her total is 
N yen (the currency of Japan), thus she has to hand at least 
N yen to the cashier (and possibly receive the change).

However, as mentioned before, she is very particular about numbers. When she hands money to the cashier, the decimal notation of the amount must not contain any digits that she dislikes. Under this condition, she will hand the minimum amount of money.

Find the amount of money that she will hand to the cashier.
*/

const irohasObsession = (n, k, ...nums) => {
    let notIncludedNums = [];
    for (let i = 0; i < 10; i++) {
        if (!nums.includes(i)) {
            notIncludedNums.push(i)
        }
    }
    let extraNum = 10 - k
    console.log({ notIncludedNums })
    console.log({ extraNum })
    const nArray = `${n}`.split('').map(Number)
    console.log({nArray})
    const result = []
    nArray.forEach((num, x) => {
        notIncludedNums.forEach((notIncNum, y) => {
            console.log({num, x, notIncNum, y, result, resx: result[x]
            })
            if (notIncNum >= num && result[x] == undefined) {
                result.push(notIncludedNums[y])
            }
        } )
    })

    console.log({result})
    return Number(result.map(String).join(''))
}

irohasObsession(307, 6, 1, 2, 4, 5, 6, 7)