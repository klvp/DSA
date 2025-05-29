let arr = [1, 2, 3, 4]

function productArray(arr) {
    const n = arr.length
    let start = 1
    const prefix = []
    const suffix = []
    const result = []
    for (let i = 0; i < n; i++) {
        prefix.push(start)
        start = start * arr[i]
    }
    start = 1
    for (let i = n - 1; i >= 0; i--) {
        suffix.unshift(start)
        start = start * arr[i]
    }
    for (let i = 0; i < n; i++) result.push(prefix[i] * suffix[i])
    return result
}

function productArray(arr) {
    const n = arr.length
    let start = 1
    const result = []
    for (let i = 0; i < n; i++) {
        result.push(start)
        start = start * arr[i]
    }
    start = 1
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * start
        start = start * arr[i]
    }
    return result
}

console.log(productArray(arr))
console.log(productArray([-1, 1, 0, -3, 3]))

let obj = {name:"KLVP", age: 27}
// let person = Object.create(obj)
let person = obj
person.age = 21
delete person.age
console.log(person.age)