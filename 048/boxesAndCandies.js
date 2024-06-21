
const boxesAndCandies = (n, x, ...numbers) => {
    let tempArr = [...numbers]
    const ceiledHalf = Math.ceil(x / 2)
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            if (tempArr[i] > ceiledHalf) {
                tempArr[i] = ceiledHalf
            } else {
                // just don't touch 
            }
            continue
        }

        if (tempArr[i - 1] + tempArr[i] <= x) {
            // just don't touch 
        } else {
            if (tempArr[i - 1] >= ceiledHalf) {
                tempArr[i] = x - ceiledHalf
            } else {
                tempArr[i] = ceiledHalf
            }
        }
    }
    const result = numbers.reduce((acc, cur) => acc + cur, 0) - tempArr.reduce((acc, cur) => acc + cur, 0)
    return result 
}

console.log(boxesAndCandies(3,3,2,2,2))

/**
 *  const ceiledHalf = Math.ceil(x/2) 
 * ------------
 *  in for loop
 *  if(i === 0) {
 *      if( tempArr[i] > ceiledHalf) {
 *          tempArr[i] = ceiledHalf
 *      } else {
 *       // just don't touch 
 *      }
 *  }
 *  if(tempArr[i - 1] + tempArr[i] <= x) {
 *       // just don't touch 
 *  } else {
 *      if(tempArr[i - 1] >= ceiledHalf) {
 *          tempArr[i] = x - ceiledHalf
 *      } else {
 *          tempArr[i] = ceiledHalf
 *      }
 *  }
 *  
 * 
 * 
 */