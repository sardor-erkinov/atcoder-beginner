
const fightingOverCandies = (...nums) => {
    const max = nums.sort((a, b) => b - a)[0]
    const newArr = [...nums].filter((item) => item !== max)

    return  newArr.reduce((acc, cur) => acc + cur, 0) === max ? "Yes" : "No"
}

console.log(fightingOverCandies(11, 20 ,30))