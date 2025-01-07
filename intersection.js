let a = [1, 2, 1, 3, 1], b = [3, 1, 3, 4, 1]
function intersectionWithDuplicates(a, b) {
    let set_a = new Set(a)
    // let res = []
    // for (let n of b) {
    //     if (set_a.has(n)) {
    //         res.push(n)
    //         set_a.delete(n)
    //     }
    // }
    return b.filter(n => {
        if (set_a.has(n)) {
            set_a.delete(n)
            return n
        }
    })
}
console.log(intersectionWithDuplicates(a, b))