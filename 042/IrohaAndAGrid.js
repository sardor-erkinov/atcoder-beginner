


const irohaAndAGrid = (h, w) => {
        
    if (h == 1 || w == 1) {
        return 1
    }
    return irohaAndAGrid(h - 1, w) + irohaAndAGrid(h, w - 1)
}

const main = (h, w, a, b) => {
    return irohaAndAGrid(h, w) - (a * b)
}


console.log({irohaAndAGrid: main(3, 2, 1, 1)})
