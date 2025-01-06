let arr = [1, 5, 7, -1, 5], target = 6
function countPair(arr, target) {
    let count = 0
    let freqMap = new Map()
    for (let n of arr) {
        let other = target - n
        let frequency = freqMap.get(other)
        if (frequency) {
            count += frequency
        }
        let currentFreq = freqMap.get(n)
        if (currentFreq) {
            freqMap.set(n, currentFreq + 1)
        } else {
            freqMap.set(n, 1)
        }
    }
    return count
}
console.log(countPair(arr, target))