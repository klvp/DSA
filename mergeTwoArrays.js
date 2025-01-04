let a = [2, 4, 7, 10]
let b = [2, 3]
function mergeTwoArrays(a, b) {
    let n = a.length
    let m = b.length
    let gap = Math.ceil((n + m) / 2)
    while (gap > 0) {
        let j = gap
        let i = 0
        while (j < n + m) {
            // if i and j pointer are in a[]
            if (j < n && a[i] > a[j]) {
                [a[i], a[j]] = [a[j], a[i]]
            }
            // if i pointer is in a[] and j pointer is in b[]
            else if (i < n && j >= n && a[i] > b[j - n]) {
                [a[i], b[j - n]] = [b[j - n], a[i]]
            }
            // if i and j pointer are in b[]
            else if (i >= n && b[i - n] > b[j - n]) {
                [b[i - n], b[j - n]] = [b[j - n], b[i - n]]
            }
            i++
            j++
        }
        if (gap === 1) {
            break
        }
        gap = Math.ceil(gap / 2)
    }

}
mergeTwoArrays(a, b)
console.log(a, b);
