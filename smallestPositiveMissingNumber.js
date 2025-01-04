let arr = [[2, 3, -8, 7, -1, 2, 3],
[-2, -4],
[5, 4, 1, 7, 8]]
function smallestPosMissingNumber(arr) {
    let n = arr.length
    let visited = Array.from({ length: n }).fill(false)
    for (let i of arr) {
        if (i > 0 && i <= n) {
            visited[i - 1] = true
        }
    }
    console.log(visited)
    return visited.indexOf(false) === -1 ? n + 1 : visited.indexOf(false) + 1
}
// function smallestPosMissingNumberV2(arr) {
//     let n = arr.length
//     for (let i = 0; i < n; i++) {
//         while (arr[i] >= 1 && arr[i] <= n && arr[i] !== arr[arr[i] - 1]) {
//             [arr[i], arr[arr[i] - 1]] = [arr[arr[i] - 1], arr[i]]
//         }
//     }
//     for (let n = 0; i < n; i++) {
//         if (arr[n] !== n + 1) {
//             break
//         }
//     }
//     return n + 1
// }

for (let a of arr) {
    console.log(smallestPosMissingNumber(a))
    // console.log(smallestPosMissingNumberV2(a))
}