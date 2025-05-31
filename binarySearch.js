function binarySearch(nums, target) {
    let [l, r] = [0, nums.length - 1]
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (nums[mid] == target) return mid
        else if (target > nums[mid]) l = mid + 1
        else r = mid - 1
    }
    return -1
}
console.log(binarySearch([1, 4, 6, 8, 19, 45], 19))