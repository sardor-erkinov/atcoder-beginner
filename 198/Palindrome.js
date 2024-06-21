const palindrome = (num) => {
    let tempNum = num
    while (Number.isInteger(tempNum / 10)) {
        tempNum = tempNum / 10
    }
    console.log({ tempNum })
    let strNum = tempNum.toString(); 
    let lengthOfNum = strNum.length;
    for (let i = 0; i < Math.floor(strNum.length / 2); i++) {
        if (strNum[i] !== strNum[lengthOfNum - (i + 1)]) {
            return false
        }
    }
        
    return true
    // const strNum = num.toString()
    // if (strNum.includes("0")) {
    //     strNum.replaceAll("0")
    // }
    // console.log(strNum)
}

console.log(
    palindrome(220000)
)