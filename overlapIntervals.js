let arr = [[1, 3], [6, 8], [2, 4], [9, 10]]
function mergeOverlap(arr) {
    arr.sort((a, b) => a[0] - b[0])
    let res = [arr.shift()]
    for (let [start, end] of arr) {
        let prevEnd = res.at(-1)[1]
        if (start <= prevEnd) {
            end = Math.max(end, prevEnd)
            res.at(-1)[1] = end
        } else {
            res.push([start, end])
        }
    }
    return res
}

console.log(mergeOverlap(arr))