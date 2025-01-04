let arr = [12, 34, 67, 90], k = 2
function minimizePages(arr, k) {
    let n = arr.length
    if (k > n) return -1
    let res = -1
    let low = Math.max(...arr)
    let high = arr.reduce((a, c) => a + c, 0)
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (check(arr, k, mid)) {
            res = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return res
}
function check(pageArray, k, pageLimit) {
    let count = 1
    let pageSum = 0

    for (let pages of pageArray) {
        if (pages + pageSum > pageLimit) {
            count++
            pageSum = pages
        }
        else {
            pageSum += pages
        }
    }

    return count <= k
}
console.log(minimizePages(arr, k))