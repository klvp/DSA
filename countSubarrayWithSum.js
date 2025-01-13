let arr = [10, 2, -2, -20, 10], k = -10
function countSubarrayKSum(arr) {
    let prefixSumMap = new Map()
    let count = 0
    let currSum = 0
    for (let n of arr) {
        currSum += n
        if (currSum === k) count++
        if (prefixSumMap.has(currSum - k)) count += prefixSumMap.get(currSum - k)
        if (prefixSumMap.has(currSum)) prefixSumMap.set(currSum, prefixSumMap.get(currSum) + 1)
        else prefixSumMap.set(currSum, 1)
    }
    return count
}

console.log(countSubarrayKSum(arr))