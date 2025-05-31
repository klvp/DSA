function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let m = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, m))
    let right = mergeSort(arr.slice(m, arr.length))
    return merge(left, right)
}
function merge(left, right) {
    const mergedArray = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) mergedArray.push(left.shift())
        else mergedArray.push(right.shift())
    }
    return [...mergedArray, ...left, ...right]
}
console.log(
    mergeSort([4, 2, 3, 5, 1, 8, 6, 7])
)