String.prototype.allPolindromes = function () {
    let result = new Set()
    const isPolindrome = (l, r) => {
        while (l < r) {
            if (this[l] != this[r]) {
                return false
            }
            l++
            r--
        }
        return true
    }
    for (let i = 0; i < this.length; i++) {
        for (let j = i; j < this.length; j++) {
            if(isPolindrome(i,j)) result.add(this.slice(i,j+1))
        }
    }
    return Array.from(result)
}

console.log("geeksmam".allPolindromes())