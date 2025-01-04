let arr = [4, 2, 5, 3, 1, 6]
function countInversion(arr, l, r) {
    let res = 0
    if (l < r) {
        let m = Math.floor((l + r) / 2)
        res += countInversion(arr, l, m)
        res += countInversion(arr, m + 1, r)
        res += countAndMerge(arr, l, m, r)
    }
    return res
}

function countAndMerge(arr, l, m, r) {
    let n1 = m - l + 1
    let n2 = r - m
    let left = arr.slice(l, m + 1)
    let right = arr.slice(m + 1, r + 1)
    let res = 0
    let i = 0, j = 0, k = l
    while (i < n1 && j < n2) {
        if (left[i] <= right[j]) {
            arr[k] = left[i]
            i++
        } else {
            arr[k] = right[j]
            j++
            res += (n1 - i)
        }
        k++
    }
    while (i < n1) {
        arr[k] = left[i]
        i++
        k++
    }
    return res
}
console.log(countInversion(arr, 0, arr.length - 1))

