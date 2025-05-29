let prices = [7, 1, 5, 3, 6, 4]

function bestTime(arr) {
    let maxProfit = -Infinity
    let small = +Infinity
    for (let curr of arr) {
        small = Math.min(small, curr)
        let profit = curr - small
        maxProfit = Math.max(maxProfit,profit)
    }
    return maxProfit
}

console.log(bestTime(prices))