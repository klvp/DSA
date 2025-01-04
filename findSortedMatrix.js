let mat = [[1, 5, 9], [14, 20, 21], [30, 34, 43]], x = 51
class Solution {
    find(mat, target) {
        let [rows, columns] = [mat.length, mat[0].length]
        let [low, high] = [0, rows * columns - 1]
        while (low <= high) {
            let mid = Math.floor((low + high) / 2)
            let [row, column] = [Math.floor(mid / columns), mid % columns]
            if (mat[row][column] === target) return true
            if (target > mat[row][column]) low = mid + 1
            else high = mid - 1
        }
        return false
    }
}
let matrix = new Solution()
console.log(matrix.find(mat, x))