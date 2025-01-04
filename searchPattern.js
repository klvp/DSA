let testStrings = [
    ["abcabcabc", "abc"],
    ["hello", "ll"],
    ["hello", "bba"],
    ["aaaaaa", "aa"],
    ["abxabcabcaby", "abcaby"],
    ["abxabcabcaby", "abcabc"],
    ["abxabcabcaby", "z"],
    ["abxabcabcaby", "abx"],
    ["abxabcabcaby", "aby"],
    ["", ""],
    ["a", ""],
    ["a", "a"],
    ["a", "b"]
]
function searchPattern(pat, txt) {
    let res = []
    let txtLength = txt.length
    let patLength = pat.length
    if (patLength > txtLength) return res
    let nextIndex = 0
    for (let i = 0; i < txtLength; i++) {
        let j = 0;
        if (txt[i] === pat[j]) {
            let startIndex = i
            while (txt[i] === pat[j] && i < txtLength && j < patLength) {
                i++
                j++
                // if (txt[i] === pat[0]) {
                //     nextIndex = i
                // }
                if (j === patLength) {
                    res.push(startIndex)
                    // i = nextIndex ? nextIndex : i
                    if (txt[i] === pat[0]) {
                        i = i - 2
                    }
                }
            }
        }
    }
    return res
}
function LPS(pat) {
    let patLength = pat.length
    if (pat === "") return 0
    lpsArray = Array.from({ length: patLength }).fill(0)
    let [prevLPS, i] = [0, 1]
    while (i < patLength) {
        if (pat[i] === pat[prevLPS]) {
            lpsArray[i] = prevLPS + 1
            prevLPS++
            i++
        }
        else if (prevLPS === 0) {
            lpsArray[i] = 0
            i++
        } else {
            prevLPS = lpsArray[prevLPS - 1]
        }
    }
    return lpsArray
}

function searchPatternKMPALGO(pat, txt) {
    let res = []
    let txtLength = txt.length
    let patLength = pat.length
    if (!patLength) return res
    let lpsArray = LPS(pat)
    let i = 0
    let j = 0
    while (i < txtLength) {
        if (pat[j] === txt[i]) {
            [i, j] = [i + 1, j + 1]
        } else if (j === 0) {
            i++
        } else {
            j = lpsArray[j - 1]
        }
        if (j === patLength) {
            res.push(i - patLength)
        }
    }
    return res
}
for (let [txt, pat] of testStrings) {
    console.log(searchPatternKMPALGO(pat, txt))
}