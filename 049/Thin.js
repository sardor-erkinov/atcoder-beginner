
const thin = (h, w, str) => {
    let arr = str.split(/\r?\n/)
    arr = arr.flatMap((i) => [i, i]).join('\n')
    console.log({ arr })
    return arr
}

console.log(thin(9, 20,
`.....***....***.....
....*...*..*...*....
...*.....**.....*...
...*.....*......*...
....*.....*....*....
.....**..*...**.....
.......*..*.*.......
........**.*........
.........**.........`
))