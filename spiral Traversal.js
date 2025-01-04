let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

function spiralTraversal(arr) {
    let res = []
    let rows = arr.length
    let columns = arr[0].length
    let [left, right, top, bottom] = [0, columns - 1, 0, rows - 1]
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) res.push(arr[top][i])
        top++
        for (let i = top; i <= bottom; i++) res.push(arr[i][right])
        right--
        if (top <= bottom) for (let i = right; i >= left; i--) res.push(arr[bottom][i])
        bottom--
        if (left <= right) for (let i = bottom; i >= top; i--) res.push(arr[i][left])
        left++
    }
    return res
}
console.log(spiralTraversal(arr))