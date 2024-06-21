
const beTogether = (n, ...numbers) => {
    const sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0)
    const averageNum = Math.ceil(sumOfNumbers / n)
    const result = numbers.reduce((acc, cur) => acc + Math.pow(cur - averageNum, 2), 0)
    return result
}

console.log({beTogether: beTogether(4, -100, -100, -100, -100)})