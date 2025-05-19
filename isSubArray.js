function isSubArray(arrA, arrB) {
    let aLength = arrA.length
    let bLength = arrB.length
    if (bLength > aLength) return false
    for (let i = 0; i <= aLength - bLength; i++) {
        let match = true
        for (let j = 0; j < bLength; j++) {
            if (arrB[j] != arrA[i + j]) {
                match = false
                break
            }
        }
        if (match) return true
    }
    return false
}

function isRotatedToEachOther(A, B) {
    let n = A.length
    let m = B.length
    if (m > n) return false
    if (isSubArray(A.concat(A), B)) return true
    return false
}
// console.log(isSubArray([1, 2, 3, 4, 5, 6], [2, 3, 4]))
// console.log(isSubArray([1, 2, 3, 4, 5, 6], [2, 1, 4]))
console.log(isRotatedToEachOther([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
console.log(isRotatedToEachOther([1, 2, 3, 4, 5], [3, 4, 5, 2, 1]))