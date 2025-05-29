let arr = [1, 2, 0]

function firstMissingPositive(arr) {
    let hash = new Set(arr)
    for (let i = 1; i <= arr.length + 1; i++) {
        if (!hash.has(i)) return i
    }
}


function firstMissingPositive(arr) {
    const n = arr.length
    for (let i = 0; i < n; i++)
        if (arr[i] < 0)
            arr[i] = 0

    for (let i = 0; i < n; i++) {
        let value = Math.abs(arr[i])
        if (value <= arr.length && value >= 1) {
            if (arr[value - 1] > 0) arr[value - 1] = arr[value - 1] * -1
            else if(arr[value-1] == 0) arr[value - 1] = -(arr.length + 1)
        }
    }
    for (let i = 1; i <= arr.length + 1; i++) {
        if (arr[i - 1] >= 0) return i
    }
}

// console.log(firstMissingPositive(arr))
// console.log(firstMissingPositive([3, 4, -1, 1]))
// console.log(firstMissingPositive([7, 8, 9, 11, 12]))
console.log(firstMissingPositive([3,3,1,4,0]))