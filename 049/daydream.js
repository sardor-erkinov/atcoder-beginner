/**
 * 
 * @param {string} str 
 */

const dayDream = (str) => {
    let tempStr = str
    const wordList = ['eraser', 'dreamer', 'erase', 'dream',]
    wordList.forEach((item) => {
        if (tempStr.includes(item)) {
            tempStr = tempStr.replaceAll(item, '').trim()
        }
    })

    return tempStr.length > 0 ? 'NO' : 'YES'
}

console.log(dayDream('dreamerer'))