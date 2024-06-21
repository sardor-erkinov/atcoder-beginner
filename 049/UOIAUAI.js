
const uoiauai = (char) => {
    if ('aeiou'.includes(char)) {
        return 'vowel'
    } else {
        return 'consonant'
    }
}

console.log(uoiauai('b'))