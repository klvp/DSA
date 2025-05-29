let arr = [2, 2, 1, 1, 1, 2, 2]
function majority(arr) {
    const freqMap = {}
    let majorityElement = null
    let max = -Infinity
    for (let num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1
        if(freqMap[num] > max){
            max = freqMap[num]
            majorityElement = num
        }
    }
    return majorityElement
}
function majority(arr){
    let n = arr.length
    let count = 0
    let element
    for(let i = 0; i < n; i++){
        if(count == 0){
            element = arr[i]
            count++
        }else if(arr[i] == element){
            count++
        }else {
            count--
        }
    }
    return element
}
console.log(majority([3,2,1,3,3]))
console.log(majority(arr))