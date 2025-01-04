let arr = [8, 9, 10, 12, 12, 12]
let target = 12
function occurances(arr, target) {
    let n = arr.length
    let lower_bound = n
    let upper_bound = n
    let low = 0
    let high = n - 1
    // finding lower bound
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] >= target) {
            lower_bound = mid
            high = mid - 1
        }
        else {
            low = mid + 1
        }
    }
    low = 0
    high = n - 1
    // finding upper bound
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] > target) {
            upper_bound = mid
            high = mid - 1
        }
        else {
            low = mid + 1
        }
    }
    return upper_bound - lower_bound
}
console.log(occurances(arr, target))