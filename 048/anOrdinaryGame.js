
const anOrdinaryGame = (text) => {
    if (text.length % 2 === 1) {
        if (text[0] === text[text.length - 1]) {
            return 'Second'
        } else {
            return 'First'
        }
    } else {
        if (text[0] === text[text.length - 1]) {
            return 'First'
        } else {
            return 'Second'
        } 
    }
}
