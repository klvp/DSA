function noOfSetBits(num){
    let res = 0
    while(num > 0){
        if(num % 2 == 1) res++ 
        num = Math.floor(num / 2)
    }
    if(num == 1) res++
    return res
}

console.log(noOfSetBits(20))