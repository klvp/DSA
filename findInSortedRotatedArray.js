let arr = [5, 6, 7, 8, 9, 10, 1, 2, 3], key = 3
function findIndex(arr, key) {
    let n = arr.length
    let low = 0
    let high = n - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] === key) return mid
        if (arr[mid] >= arr[low]) {
            if (arr[low] <= key && arr[mid] > key) high = mid - 1
            else low = mid + 1
        } else {
            if (arr[high] >= key && arr[mid + 1] <= key) low = mid + 1
            else high = mid - 1
        }
    }
    return -1
}
console.log(findIndex(arr, key))