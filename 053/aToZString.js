const aToZString = (str) => {
    const indexOfA = str.indexOf('A')
    const indexOfZ = str.lastIndexOf('Z')
    return indexOfZ + 1 - indexOfA
}

console.log(aToZString('ZABCZ'))
console.log(aToZString('HASFJGHOGAKZZFEGA'))
console.log(aToZString('QWERTYASDFZXCV'))