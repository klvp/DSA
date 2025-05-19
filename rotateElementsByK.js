const nums = [1, 2, 3, 4, 5, 6, 7]
function swap(arr, left, right) {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
}
function reverseArray(nums) {
    swap(nums, 0, nums.length - 1)
}
function rightShift(nums, k) {
    const length = nums.length
    swap(nums, 0, length - k - 1)
    swap(nums, length - k, length - 1)
    swap(nums, 0, length - 1)
}
function leftShift(nums, k) {
    rightShift(nums, nums.length - k)
}
function leftShiftv2(nums, k) {
    const length = nums.length
    swap(nums, 0, k - 1)
    swap(nums, k, length - 1)
    swap(nums, 0, length - 1)
}
// reverseArray(nums)
// rightShift(nums, 3)
// leftShift(nums, 3)
// leftShiftv2(nums, 3)
console.log(nums)