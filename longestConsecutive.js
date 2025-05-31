function longestConsecutive(arr) {
    const set = new Set(arr)
    let longest = 0
    for (let num of arr) {
        if (!set.has(num - 1)) {
            let length = 1
            while (set.has(num + length)) {
                length++
            }
            longest = Math.max(length, longest)
        }
    }
    return longest
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))