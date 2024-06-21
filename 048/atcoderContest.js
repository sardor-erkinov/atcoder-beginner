
const atcoderContest = (str) => {
    const listOfWords = str.split(' ')
    if (listOfWords.length < 2) {
        return 'A Not Found C'
    }
    return `A${listOfWords[1][0]}C`
}

console.log(atcoderContest('AtCoder Snuke Contest'))