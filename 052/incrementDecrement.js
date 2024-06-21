
const incrementDecrement = (str) => {
    let count = 0
    let counts = [];
    str.split('').forEach((char) => {
        if (char === 'I') {
            counts.push(count)
            count = count + 1
        } else {
            counts.push(count) 
            count = count - 1
        }
    })
    console.log(count, counts)
    return Math.max(...counts)
}

console.log(incrementDecrement('IIDID'))