
const childrenAndCandies = (amount) => {
    let sum = 0;
    for (let i = 1; i <= amount; i++) {
        sum += i
    }
    return sum
}

console.log({childrenAndCandies: childrenAndCandies(10)})