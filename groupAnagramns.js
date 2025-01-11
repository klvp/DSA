let arr = ["act", "god", "cat", "dog", "tac"]
function groupAnagrams(arr) {
    let ans = {}
    for (let word of arr) {
        let count = Array(26).fill(0)
        for (let c of word) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
        }
        if (!ans[count.toString()]) {
            ans[count.toString()] = []
        }
        ans[count.toString()].push(word)
    }
    return Object.values(ans)
}
console.log(groupAnagrams(arr))