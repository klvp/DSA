let mat = [[1, -1, 1],
[-1, 0, 1],
[1, -1, 1]]

function setZeros(mat) {
    let rows = mat.length, columns = mat[0].length
    let c0 = 1
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (mat[i][j] === 0) {
                mat[0][j] = 0
                if (j === 0) c0 = 0
                else mat[i][0] = 0
            }
        }
    }
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < columns; j++) {
            if (mat[0][j] === 0) {
                mat[i][j] = 0
            }
            if (mat[i][0] === 0) {
                mat[i][j] = 0
            }
        }
    }
    if (mat[0][0] === 0) {
        for (let j = 0; j < columns; j++) {
            mat[0][j] == 0
        }
    }
    if (c0 === 0) {
        for (let i = 0; i < rows; i++) {
            mat[i][0] == 0
        }
    }
}
setZeros(mat)
console.log(mat)