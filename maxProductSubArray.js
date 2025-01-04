let arr = [[2, 3, -8, 7, -1, 2, 3], [-2, -4], [5, 4, 1, 7, 8]]
function maxProductSubArray(arr) {
    let res = -Infinity
    let n = arr.length
    let pre = 1
    let suff = 1
    for (let i = 0; i < n; i++) {
        if (pre === 0) pre = 1
        if (suff === 0) suff = 1
        pre *= arr[i]
        suff *= arr[n - 1 - i]
        res = Math.max(res, Math.max(pre, suff))
    }
    return res
}

for (let a of arr) {
    console.log(maxProductSubArray(a))
}