let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

function removeDuplicates(arr) {
    let l = 1
    for(let i = 1; i < arr.length; i++){
        if(arr[i] != arr[l-1]){
            [arr[l],arr[i]]=[arr[i],arr[l]]
            l++
        }
    }
    return l
}
// removeDuplicates(arr)
console.log(removeDuplicates(arr),arr)
// console.log(Array.from(new Set(arr)))