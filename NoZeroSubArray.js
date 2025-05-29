let arr = [1,3,0,0,2,0,0,4]
function subArrays(arr){
    let count = 0
    let result = 0
    for(let num of arr){
        if(num == 0){
            count++
        }else{
            count = 0
        }
        result = result + count
    }
    return result
}
console.log(subArrays(arr))
console.log(subArrays([0,0,0,2,0,0]))