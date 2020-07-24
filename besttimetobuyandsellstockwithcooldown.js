//Objective is the same as 'Best time to buy and sell stock', but this time
//we have a cooldown of one day between selling and buying again.

let prices = [1,2,3,0,2]


//O(n) solution that uses a state matchine to keep track of selling, holding
//and resetting before making a final decision

let sold = -Infinity
let buy = -Infinity
let reset = 0

for (let price of prices) {
    let temp = sold
    sold = buy + price
    buy = Math.max(buy, reset - price)
    reset = Math.max(reset, temp)
}

return Math.max(sold, reset)