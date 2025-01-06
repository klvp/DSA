let arr = [1, 4, 45, 6, 10, 8], target = 16
function twoSum(arr, target) {
    let map = new Set()
    console.log(map)
    for (let n of arr) {
        let findElement = target - n
        if (map.has(findElement)) return true
        else map.add(n)
    }
    console.log(map)
    return false
}
console.log(twoSum(arr, target))