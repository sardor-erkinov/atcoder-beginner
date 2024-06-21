const oneCardPoker = (a, b) => {
    if (a === b) {
        return 'Draw'
    } 
    if (a === 1 || b === 1) {
        return a === 1 ? 'Alice' : 'Bob'
    }
    return a > b ? 'Alice' : 'Bob'
}

console.log(oneCardPoker(13, 1))