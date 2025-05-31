let strs = ["flower","flow","flight"]
function longestCommonPrefix(strs){
    let resStr = ''
    const n = strs.length
    if(!n) return resStr
    const item = strs[0]
    for(let pos = 0; pos < item.length; pos++){
        for(let i = 1 ; i < n; i++){
            if(! (item[pos] === strs[i][pos])) return resStr
        }
        resStr += item[pos]
    }
    return resStr
}
console.log(longestCommonPrefix(strs))
