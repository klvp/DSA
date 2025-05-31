function isPalindrome(str){
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let [l,r] = [0,str.length-1]
    while(l<r){
        if(str[l] !== str[r]){
            return false
        }
        l++
        r--
    }
    return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))