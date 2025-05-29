function increasingTriplet(nums){
    let least = Infinity
    let secondLeast = Infinity
    for(let num of nums)
        if(least >= num) least = num
        else if(secondLeast >= num) secondLeast = num
        else return true
    return false
}
console.log(increasingTriplet([1,2,3,4,5]))
console.log(increasingTriplet([5,4,3,2,1]))
console.log(increasingTriplet([2,1,5,0,4,6]))
console.log(increasingTriplet([0,4,2,1,0,-1,-3]))
console.log(increasingTriplet([1,1,-2,6]))