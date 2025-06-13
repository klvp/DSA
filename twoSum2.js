var twoSum = function (numbers, target) {
    const numPos = {}
    for (let i = 0; i < numbers.length; i++) {
        let composite = target - numbers[i]
        if(composite.toString() in numPos){
            return [numPos[composite],i + 1]
        }else{
            numPos[numbers[i]] = i + 1
        }
    }
};
numbers = [2, 7, 11, 15], target = 9
console.log(
    twoSum(numbers, target)
)

