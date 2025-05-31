function singleNumber(nums) {
    let res = 0
    for (let num of nums)
        res = res ^ num
    return res
}
console.log(singleNumber([1, 2, 3, 1, 3]))
console.log(singleNumber([1, 2, 3, 1, 3, 2]))