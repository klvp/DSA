/* Longest Substring without repeating characters */

function longestSubString(str) {
    const n = str.length
    let longSubStr = ""
    for (let i = 0; i < n; i++) {
        let sub = ""
        let seen = new Set()
        // let maxLength = 0
        for (let j = i; j < n; j++) {
            if (seen.has(str[j])) {
                break
            }
            sub += str[j]
            seen.add(str[j])
            // maxLength = Math.max(maxLength, j-i+1)
        }
        if (longSubStr.length < sub.length) longSubStr = sub
    }
    console.log(longSubStr)
}

function longestSubString(str) {
    const n = str.length
    const charMap = {}
    let longSubStr = ""
    let l = 0, r = 0;
    while (r < n) {
        if (str[r] in charMap) {
            if(charMap[str[r]] >= l){
                l = charMap[str[r]] + 1
            }
        }
        charMap[str[r]] = r
        let sub = str.slice(l,r+1)
        if (longSubStr.length <= sub.length) longSubStr = sub
        r++
    }
    return longSubStr
}

console.log(longestSubString("cadbzabcd"))