function missingNumber(arr){
    let min = +Infinity
    arr.forEach((element) => {
        min = Math.min(min,element)
    });
    for(let i = 0; i < arr.length; i++){
        if(!arr.includes(min + i)){
            return min + i
        }
    }
    return null
}

// console.log(missingNumber([4,6,5,7,9]))

function findMissingNumber(arr) {
    let min = Infinity;
    let max = -Infinity;
    let actualSum = 0;

    // O(n): Find min, max, and actual sum
    for (let num of arr) {
        min = Math.min(min, num);
        max = Math.max(max, num);
        actualSum += num;
    }

    // Total number of elements in a full sequence
    let n = max - min + 1;

    // Expected sum of the full sequence
    let expectedSum = (n * (min + max)) / 2;

    // Missing number is the difference
    return expectedSum - actualSum;
}

// Test
// console.log(findMissingNumber([4, 6, 5, 7, 9])); // Output: 8

function findMissingNumber(arr) {
    let diffs = {};
    let maxFreq = 0;
    let commonDiff;

    // Step 1: Count differences
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i - 1];
        diffs[diff] = (diffs[diff] || 0) + 1;

        if (diffs[diff] > maxFreq) {
            maxFreq = diffs[diff];
            commonDiff = diff;
        }
    }

    // Step 2: Find where the difference breaks
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== commonDiff) {
            return arr[i - 1] + commonDiff;
        }
    }

    return null; // no missing number detected
}

// Test
// console.log(findMissingNumber([2, 4, 8, 12, 10])); // Output: 6
console.log(findMissingNumber([4, 6, 5, 7, 9])); 


