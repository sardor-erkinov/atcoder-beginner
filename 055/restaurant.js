const restaurant = (n) => {
    return n * 800 - (Math.floor(n / 15) * 200)
}

console.log(restaurant(20)) // 15800

console.log(restaurant(60)) // 47200