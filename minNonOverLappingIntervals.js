
let intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]

function nonOverlappingIntervals(intervals) {
    intervals.sort((a, b) => a[1] - b[1])
    let end = intervals[0][1], c = 0, n = intervals.length
    for (let i = 1; i < n; i++) {
        if (intervals[i][0] < end) {
            c++
            end = Math.min(end, intervals[i][1])
        } else {
            end = intervals[i][1]
        }
    }
    return c
}

console.log(nonOverlappingIntervals(intervals))