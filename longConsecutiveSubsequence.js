let arr = [1, 9, 3, 10, 4, 20, 2]

function longestConsecutiveSubsequence(arr) {
    let set = new Set(arr)
    let n = arr.length
    let res = 0
    for (let i = 0; i < n; i++) {
        if (!set.has(arr[i] - 1)) {
            let j = arr[i]
            while (set.has(j)) {
                j++
            }
            res = Math.max(j - arr[i], res)
        }
    }
    return res
}
console.log(longestConsecutiveSubsequence(arr))