let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
function maxArea(arr) {
    let res = 0
    let l = 0
    let r = arr.length - 1
    while (l < r) {
        let area = (r - l) * Math.min(arr[r], arr[l])
        res = Math.max(area, res)
        if(arr[r] > arr[l]) l++
        else r--
    }
    return res
}

console.log(
    maxArea(height)
)