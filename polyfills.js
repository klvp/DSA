Array.prototype.myMap = function (cb) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this))
    }
    return result
}

// console.log([1,2,3].map(item => item*2))
// console.log([1,2,3].myMap(item => item*2))

Array.prototype.myFilter = function (cb) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result
}

// console.log([1,2,3,4].filter(item => item%2 == 0))
// console.log([1,2,3,4].myFilter(item => item%2 == 0))

Array.prototype.myReduce = function (cb, initialvalue) {
    let accumulator = initialvalue
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }
    return accumulator
}

// console.log([1, 2, 3, 4].reduce((a, c) => a + c, 0))
// console.log([1, 2, 3, 4].myReduce((a, c) => a + c, 0))


const person = { name: "KLVP", age: 27 }

function intro(from) {
    console.log(`I am ${this.name} form ${from} and ${this.age} old`)
}

Function.prototype.myCall = function (context, ...args) {
    if (this.constructor.name != 'Function') {
        throw new Error("method should be called on Functions");

    }
    context.fun = this
    context.fun(...args)
}

// intro.call(person, "RDG")
// intro.myCall(person, "RDG")

Function.prototype.myApply = function (context, args = []) {
    if (this.constructor.name != 'Function') {
        throw new Error("method should be called on Functions");
    }
    if (!Array.isArray(args)) {
        throw new Error("should pass parameters as array");
    }
    context.fun = this
    context.fun(...args)
}

// intro.apply(person, ["RDG"])
// intro.myApply(person, ["RDG"])

Function.prototype.myBind = function (context) {
    if (this.constructor.name != 'Function') {
        throw new Error("method should be called on Functions");
    }
    context.fun = this
    return function (...args) {
        return context.fun(...args)
    }
}

// intro.bind(person)("RDG")
// intro.myBind(person)("RDG")

Array.prototype.myFlat = function (level = 1) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) && level > 0) {
            result.push(...this[i].myFlat(level - 1))
        } else {
            result.push(this[i])
        }
    }
    return result
}

// console.log([1,2,3,[4,5,[6,[7,8,9]]]].flat(2))
// console.log([1,2,3,[4,5,[6,[7,8,9]]]].myFlat(2))
