let a = [2, 3, 6, 7, 9], b = [1, 4, 8, 10], k = 5
function kthElement(a, b, k) {
    let n = a.length
    let m = b.length
    if (n > m) return kthElement(b, a, k)
    let low = Math.max(0, k - m)
    let high = Math.min(n, k)
    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2)
        let mid2 = k - mid1
        // partition of a[] to get l1 and r1
        let l1 = mid1 === 0 && -Infinity || a[mid1 - 1]
        let r1 = mid1 === n && +Infinity || a[mid1]
        // partition of b[] to get l2 and r2
        let l2 = mid2 === 0 && -Infinity || b[mid2 - 1]
        let r2 = mid2 === m && +Infinity || b[mid2]
        if (l1 <= r2 && l2 <= r1) {
            return Math.max(l1, l2)
        }
        if (l1 > r2) high = mid1 - 1
        else low = mid1 + 1
    }

}
console.log(kthElement(a, b, k))