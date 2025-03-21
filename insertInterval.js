let intervals = [[1, 3], [4, 5], [6, 7], [8, 10]]
let newInterval = [5, 6]

function insertInterval(intervals, newInterval) {
    let res = []
    let i = 0
    let n = intervals.length

    while (i < n && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i])
        i++
    }
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0])
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i++
    }
    res.push(newInterval)
    while (i < n) {
        res.push(intervals[i])
        i++
    }
    return res
}

console.log(insertInterval(intervals, newInterval))