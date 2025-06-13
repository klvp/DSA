function Threesum(arr) {
    let result = []
    if (arr.length <= 2) return result
    for (let i = 0; i <= arr.length - 3; i++) {
        for (let j = i + 1; j <= arr.length - 2; j++) {
            for (let k = j + 1; k <= arr.length - 2; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) result.push([arr[i], arr[j], arr[k]])
            }
        }
    }
    return result
}
nums = [-1, 0, 1, 2, -1, -4]
console.log(
    Threesum(nums)
)