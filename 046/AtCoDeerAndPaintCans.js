
const atCoDeerAndPaintCans = (...numbers) => {
    const setOfCans = [...new Set(numbers)]

    return setOfCans.length
}

console.log(atCoDeerAndPaintCans(12,12,3))