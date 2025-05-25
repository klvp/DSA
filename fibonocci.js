function fibonocci(n) {
    if ([0, 1].includes(n)) return n
    return fibonocci(n-1) + fibonocci(n-2)
}

function fibonocciSequence(n){
    const sequence = []
    for(let i = 0; i < n; i++){
        sequence.push(fibonocci(i))
    }
    return sequence.join(" ")
}

console.log(fibonocciSequence(20))
