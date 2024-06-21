

// const f = (b, n) => {
//     if (n < b) {
//         return n;
//     }
//     if (n >= b) {
//         return f(b, Math.floor(n / b)) + n % b;
//     }
// }
// /**
//  * Find the first element in the string 's' that is less than the number 'n'.
//  *
//  * @param {number} n - The number to compare against the elements in 's'.
//  * @param {string} s - The string to search for the first element less than 'n'.
//  * @return {string} The first element in 's' that is less than 'n'.
//  */
// const findB = (n, s) => {
//     let strIndex = 0;
//     const stringS = s.toString().split("").map(Number);
//     // let temp = ''
//     let result = ''
//     for (; strIndex < stringS.length - 1; strIndex++) {
//         if (n > stringS[strIndex]) {
//             result = result + `${stringS[strIndex]}`
//             // return stringS[strIndex];
//         } else {
//             result += Math.floor(Number(s.slice(0, strIndex)));
//             // return Math.floor(Number(s.slice(0, strIndex)));
//         }
//     }
//     console.log({ result })
// }

// // const result = f('b', 'n');

// console.log(f(10, 43), 'normal')

// // findB(10, 43)

// // const reverseDigitSum = (n, s) => {
// //     let temp = s;
// //     let reverseDigitSum = 0;

// //     while (temp > 0) {
// //         let rem = temp % n;
// //         reverseDigitSum =
// //             reverseDigitSum * n + rem;
// //         temp = parseInt(temp / n);
// //     }

// //     // product of digit sum and reverse digit
// //     // sum and assign it to number letiables
// //     let number = n * reverseDigitSum;
// //     return number;
// // }

// // console.log({reverseDigitSum: reverseDigitSum(10, 43)})


// let temp = 30
// let reverseDigitSum = 0;
// const reverseF = (n, s) => { 
//     // 10, 30
//     while (temp > 0) {
// 		var rem = temp % 10;
// 		reverseDigitSum =
// 		reverseDigitSum * 10 + rem;
// 		temp = parseInt(temp / 10);
//     }
 
// 	return reverseDigitSum;
// }

// console.log(reverseF(10, 30), 'reverse')