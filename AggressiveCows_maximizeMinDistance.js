let stallCows = [[[1, 2, 4, 8, 9], 3],
[[10, 1, 2, 7, 5], 3],
[[2, 12, 11, 3, 26, 7], 5]]
function maximizeMinDistance(stalls, k) {
    stalls.sort((a, b) => a - b)
    let n = stalls.length
    let low = 1
    let high = stalls.at(-1) - stalls.at(0)
    let res = 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (check(stalls, k, mid)) {
            res = mid
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return res
}
function check(stalls, k, distance) {
    let count = 1
    let prev = stalls[0]
    let n = stalls.length
    for (let i = 1; i < n; i++) {
        if (stalls[i] - prev >= distance) {
            count++
            prev = stalls[i]
        }
    }
    return count >= k
}
for (let [stalls, k] of stallCows) {
    console.log(maximizeMinDistance(stalls, k))
}