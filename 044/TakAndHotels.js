/**
 * 
There is a hotel with the following accommodation fee:
        X yen (the currency of Japan) per night, for the first 
        K nights
        Y yen per night, for the 
        (K+1)-th and subsequent nights
        Tak is staying at this hotel for 
        N consecutive nights. Find his total accommodation fee.
 */
const takAndHotels = (n, k, x, y) => {
    const result = ((x * k) + (y * (n - k))) 
    return result
}

console.log(takAndHotels(5, 3, 10000, 9000))