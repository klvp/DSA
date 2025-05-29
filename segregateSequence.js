//Input array : [21, 1, 3, 22, 2, 4, 23, 5,24,6, 71,31]
//Otput: [[1, 2, 3, 4, 5, 6], [21, 22, 23, 24], [31], [71]]


function segregate(arr){
    arr = arr.sort((a,b) => a-b)
    const obj = {}
    arr.forEach(element => {
            let key = Math.floor(element / 10).toString()
            if (key in obj){
                obj[key].push(element)
            } else{
                obj[key] = [element]
            }
    })
    return Object.values(obj)
}
console.log(segregate([21, 1, 3, 22, 2, 4, 23, 5, 24, 6, 71, 31, -21, -22, -11]))