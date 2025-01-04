let arr = [2, 3, 4, 7, 11], k = 5
function kthMissing(arr, k) {
    let n = arr.length
    let low = 0
    let high = n - 1
    let res = k + n
    while (low <= high) {
        let mid = Math.floor((high + low) / 2)
        if (arr[mid] > k + mid) {
            high = mid - 1
            res = mid + k
        } else low = mid + 1
    }
    return res
}
console.log(kthMissing(arr, k))