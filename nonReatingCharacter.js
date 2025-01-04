let strings = ["geeksforgeeks", "racecar", "aabbccc"]
function nonRepeatingCharacter(s) {
    let n = s.length
    if (!n) return -1
    let charCount = new Map()
    for (let char of s) {
        let charLength = charCount.get(char)
        if (!charLength) {
            charCount.set(char, 1)
        } else {
            charCount.set(char, charLength + 1)
        }
    }
    for (let [key, value] of charCount) {
        if (value === 1) return key
    }
    return -1
}
for (let s of strings) {
    console.log(nonRepeatingCharacter(s))
}