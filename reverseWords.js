const s = "a good   example"
function reverseWords(s){
    let resultStr = (s.split(" ").filter(Boolean))
    let l = 0
    let r = resultStr.length - 1
    while(l<r){
        [resultStr[l],resultStr[r]] = [resultStr[r],resultStr[l]]
        l++
        r--
    }
    return resultStr.join(" ")
}

console.log(reverseWords(s))
console.log(reverseWords("  hello world  "))
console.log(reverseWords("the sky is blue"))