let arr = [1, 2, 3]
function subarraySum(arr, target) {
    let count = 0
    let curSum = 0
    let mapper = { '0' : 1 }
    for(let num of arr){
        curSum += num
        let diff =  curSum - target
        count += (mapper[diff] || 0)
        mapper[curSum] = 1 + (mapper[curSum] || 0)
    }
    console.log(mapper)
    return count
}
console.log(
    subarraySum(arr, 3)
)