const nums = [2, 1, 0, 4, 0, 0, 3, 4, 0, 1, 19, 15, 0]

function secondLargest(arr) {
    let max = -Infinity
    let sMax = -Infinity
    let tMax = -Infinity
    arr.forEach((num) => {
        if (max < num) {
            sMax = max
            max = num
        } else if (max > num && sMax < num) {
            tMax = sMax
            sMax = num
        } else if (tMax < num && sMax > num) {
            tMax = num
        }
    })
    return [max, sMax, tMax]
}
console.log(secondLargest(nums))