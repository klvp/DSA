const nums = [2, 1, 0, 4, 0, 0, 3, 4, 0, 8, 0, 0]

function moveZerosToEnd(arr) {
    let l = 0
    let r = arr.length - 1
    while (l < r) {
        // TODO: find the non zero element from right
        while (arr[r] == 0) r--
        // TODO: find the zero element from left
        while (arr[l] != 0) l++
        // TODO: swap left and right if left < right
        if (l < r) {
            [arr[l], arr[r]] = [arr[r], arr[l]]
        }
    }
}
function moveDigitstoLeft(arr) {
    let l = 0
    let r = 0
    while (r < (arr.length)) {
        // TODO: find the index of zero element
        while (arr[l] != 0) {
            l++
        }
        // TODO: find the index of next non zero element
        r = l + 1
        while (arr[r] == 0 && r < arr.length) {
            r++
        }
        // TODO: if right pointer is not out of length then swap left and right
        if (r < arr.length) {
            [arr[l], arr[r]] = [arr[r], arr[l]]
        }
    }
}
moveZerosToEnd(nums)
moveDigitstoLeft(nums)
console.log(nums)