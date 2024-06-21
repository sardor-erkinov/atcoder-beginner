
const walk = (r, x, y) => {
    const a = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    return Math.ceil(a / r)
}

console.log(walk(3, 4, 4)) // 2 