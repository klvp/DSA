let arr = [4, 2, 3]
function minSortedRotatedArray(arr) {
    let low = 0
    let high = arr.length - 1
    if (arr[low] < arr[high]) return arr[low]
    while (low < high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] > arr[high]) {
            low = mid + 1
        }
        else {
            high = mid
        }
    }
    return arr[low]

}
console.log(minSortedRotatedArray(arr))