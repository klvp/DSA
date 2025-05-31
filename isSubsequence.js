const s = "abc", t = "ahbgdc"

function isSubsequence(s,t){
    let l = 0
    for(let i = 0; i < t.length;i++){
        if(t[i] == s[l]){
            l++
        }
    }
    return l == s.length ? true : false
}

// console.log(isSubsequence(s,t))
console.log(isSubsequence("axc","ahbgdc"))