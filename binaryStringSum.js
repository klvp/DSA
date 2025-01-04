let s1 = "1101"
let s2 = "111"

function trimLeadingZeros(num) {
    let findOne = num.indexOf("1")
    return findOne !== -1 ? num.slice(num.indexOf("1")) : "0"
}
function bitSum(small, big) {
    small = trimLeadingZeros(small)
    big = trimLeadingZeros(big)
    let smallLength = small.length
    let bigLength = big.length
    let carry = 0
    if (smallLength > bigLength) {
        [small, big] = [big, small]
        smallLength = small.length
        bigLength = big.length
    }
    let smallIndex = smallLength - 1
    let result = []
    for (let i = bigLength - 1; i >= 0; i--) {
        let bit1 = parseInt(big[i])
        let bitSum = carry + bit1
        if (smallIndex >= 0) {
            let bit2 = parseInt(small[smallIndex])
            bitSum += bit2
            smallIndex--
        }
        let bit = bitSum % 2
        carry = Math.floor(bitSum / 2)
        result.unshift(bit)
    }

    if (carry > 0) {
        result.unshift(carry)
    }
    return result.join("")
}

console.log(bitSum(s1, s2))