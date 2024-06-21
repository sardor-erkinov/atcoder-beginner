/*
Problem Statement
Iroha loves Haiku. Haiku is a short form of Japanese poetry. A Haiku consists of three phrases with 5, 7 and 5 syllables, in this order.

To create a Haiku, Iroha has come up with three different phrases. These phrases have A, B and C syllables, respectively. Determine whether she can construct a Haiku by using each of the phrases once, in some order.
*/

const irohaAndHaiku = (a, b, c) => {
    let result = []
    if (a % 5 === 0) {
        result.push(5)
    } else if (a % 7 === 0) {
        result.push(7)
    } else {
        return "NO"
    }

    if (b % 5 === 0) {
        result.push(5)
    } else if (b % 7 === 0) {
        result.push(7)
    } else {
        return "NO"
    }

    if (c % 5 === 0) {
        result.push(5)
    } else if (c % 7 === 0) {
        result.push(7)
    } else {
        return "NO"
    }

    if(result.length === 3 && result.filter(num => num === 5).length === 2 && result.filter(num => num === 7).length === 1) {
        return "YES"
    } else {
        return "NO"
    }
}

console.log({irohaAndHaiku: irohaAndHaiku(35, 35, 9)})
