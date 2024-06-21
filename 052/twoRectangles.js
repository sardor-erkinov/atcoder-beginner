
const twoRectangles = (a, b, c, d) => {
    const firstArea = a * b
    const secondArea = c * d

    if (firstArea === secondArea) {
        return firstArea
    }
    return firstArea > secondArea ? firstArea : secondArea
}

console.log(twoRectangles(3, 5, 2, 7))