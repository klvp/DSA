function decimalToBinary(num){
    let res = ""
    while(num > 0){
        res = num % 2 + res
        num = Math.floor(num / 2)
    }
    if(num == 1) 1 + res
    return res
}

console.log(decimalToBinary(20))