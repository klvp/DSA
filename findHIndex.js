let citations = [3, 0, 5, 3, 0]

function hIndex(citations) {
    let n = citations.length
    let freq = new Array(n + 1).fill(0)
    for (let ele of citations) {
        if (ele >= n) {
            freq[n] += 1
        } else {
            freq[ele] += 1
        }
    }
    let ind = n
    let sum = freq[n]
    while (sum < ind) {
        ind--
        sum += freq[ind]
    }
    return ind

}

console.log(hIndex(citations))