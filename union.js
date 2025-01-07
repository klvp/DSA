let a = [1, 2, 1, 3, 1], b = [3, 1, 3, 4, 1]
function unionWithDuplicates(a, b) {
    let set_a = new Set(a)
    for (let n of b) {
        set_a.add(n)
    }
    return set_a.size
}
console.log(unionWithDuplicates(a, b))