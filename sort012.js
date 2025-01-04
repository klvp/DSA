let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
function sort012(arr) {
    let n = arr.length
    let low = 0
    let mid = 0
    let high = n - 1
    while (high >= mid) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            low++
            mid++
        } else if (arr[mid] === 1) {
            mid++
        } else if (arr[mid] === 2) {
            [arr[high], arr[mid]] = [arr[mid], arr[high]]
            high--
        }
    }
}
sort012(arr)
console.log(arr)