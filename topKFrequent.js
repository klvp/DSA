function topKFrequent(arr, k) {
    const freqMap = {}
    const bucket = []
    const res = []
    for (let num of arr) {
        freqMap[num] = 1 + (freqMap[num] || 0)
    }
    for (let [num, freq] of Object.entries(freqMap)) {
        if (!bucket[freq]) {
            bucket[freq] = new Set().add(num)
        } else {
            bucket[freq].add(num)
        }
    }
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i] && res.length < k) res.push(...bucket[i])
    }
    return res.map(Number)
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3],3))