let s1 = "a"
let s2 = "b"

function isAnagram(s1, s2) {
    let l1 = s1.length
    let l2 = s2.length
    if (l1 !== l2) return false
    const charCount = new Map()
    for (let char of s1) {
        let charFrequency = charCount.get(char)
        if (!charFrequency) {
            charCount.set(char, 1)
        } else {
            charCount.set(char, charFrequency + 1)
        }
    }
    for (let char of s2) {
        let charFrequency = charCount.get(char)
        if (!charFrequency) {
            charCount.set(char, 1)
        } else {
            charCount.set(char, charFrequency - 1)
        }
    }
    for (let [key, value] of charCount) {
        if (value !== 0) return false
    }
    console.log(charCount)
    return true
}

console.log(isAnagram(s1, s2))