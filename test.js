function counterFunction() {
    let count = 0
    return function () {
        count++
        return count
    }
}

let increament = counterFunction()
let increament1 = counterFunction()
console.log(increament())
console.log(increament())
console.log(increament())
console.log(increament())
console.log(increament1())