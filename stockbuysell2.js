let prices = [7, 1, 5, 3, 6, 4]
function maxProfit(arr, i, buy) {
    if(i == arr.length) return 0
    let profit
    if (buy) {
        profit = Math.max(
            -arr[i] + maxProfit(arr, i + 1, 0),
            0 + maxProfit(arr, i + 1, 1)
        )
    } else {
        profit = Math.max(
            arr[i] + maxProfit(arr, i + 1, 1),
            0 + maxProfit(arr, i + 1, 0)
        )
    }
    return profit
}

console.log(maxProfit(prices, 0, 1))
console.log(maxProfit([1,2,3,4,5], 0, 1))