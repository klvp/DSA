function countBits(n) {
    let result = []
    for (let i = 0; i <= n; i++)
        result.push(noOfSetBits(i))
    return result
}

function countBits(n) {
    return Array.from({ length: n + 1 }).map((_, i) => noOfSetBits(i))
}

function noOfSetBits(num) {
    let res = 0
    while (num > 0) {
        if (num % 2 == 1) res++
        num = Math.floor(num / 2)
    }
    if (num == 1) res++
    return res
}
console.log(countBits(5))
console.log(countBits(2))