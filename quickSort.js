function quickSort(arr) {
    if (arr.length <= 1) return arr
    let pivot = arr.pop()
    let left = []
    let right = []
    arr.forEach(ele => {
        if (ele <= pivot)
            left.push(ele)
        else
            right.push(ele)
    }
    )
    return [...quickSort(left), pivot, ...quickSort(right)]
}

let arr = [4, 2, 3, 5, 1, 7, 6]
console.log(
    quickSort(arr, 0, arr.length - 1)
)