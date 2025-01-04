let arr = [[2, 3, -8, 7, -1, 2, 3], [-2, -4], [5, 4, 1, 7, 8]]
function MaxSum(arr) {
    let max = -Infinity
    let sum = 0
    let n = arr.length
    for (let i = 0; i < n; i++) {
        sum += arr[i]
        if (sum > max) max = sum
        if (sum < 0) sum = 0
    }
    return max
}

for (let a of arr) {
    console.log(MaxSum(a))
}