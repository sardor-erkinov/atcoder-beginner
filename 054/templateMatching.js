const templateMatching = (n, m, ...templates) => {
    let isMatching = true;
    const firstList = templates.filter(template => template.length === n) 
    const secondList = templates.filter(template => template.length === m)

    for (let i = 0; i < n; i++) {
        if (m >= n) {
            break
        }
        if (secondList[i]) {
            for (let j = 0; j < firstList[i].length; j++) {   
                if (secondList[i][j]) {
                    if (firstList[i][j] !== secondList[i]?.[j]) {
                        isMatching = false
                        break
                    }
                }
            }
        }
    }

    return isMatching ? 'Yes' : 'No'
}

console.log(templateMatching(4, 1, '....', '....', '....', '....', '#'))