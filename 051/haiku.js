/**
 * 
 * @param {string} str 
 * @returns 
 */
const haiku = (str) => {
    return str.replaceAll(',', ' ')
}

console.log(haiku('happy,newyear,enjoy'))