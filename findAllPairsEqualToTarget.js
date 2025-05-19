function findAllPairsEqualTarget(arr, target) {
    const set = new Set()
    const result = []
    arr.forEach(num => {
        const complement = target - num
        if (set.has(complement)) result.push([num, complement])
        set.add(num)
    })
    return result
}

function findAllPairsEqualTargetv2(arr, target) {
    const freqMap = new Map()
    const result = []
    arr.forEach(num => {
        const complement = target - num
        if (freqMap.has(complement) && freqMap.get(complement)) {
            result.push([num, complement])
            freqMap.set(complement, freqMap.get(complement) - 1)
        }
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    })
    return result
}

// console.log(findAllPairsEqualTarget([2, 7, 2, 7], 9))
// console.log(findAllPairsEqualTargetv2([2, 7, 2, 7], 9))