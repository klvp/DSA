let arr = [[2, 3, -8, 7, -1, 2, 3],
[-2, -4],
[5, 4, 1, 7, 8]]
function maxCircularSubArray(arr) {
    let globalMax = arr[0], globalMin = arr[0]
    let currentMax = 0, currentMin = 0
    let total = 0
    for (let n of arr) {
        currentMax = Math.max(currentMax + n, n)
        currentMin = Math.min(currentMin + n, n)
        total += n
        globalMax = Math.max(globalMax, currentMax)
        globalMin = Math.min(globalMin, currentMin)
    }
    return globalMax >= 0 ? Math.max(globalMax, total - globalMin) : globalMax
}
for (let a of arr) {
    console.log(maxCircularSubArray(a))
}