/*
  121. Best Time to Buy and Sell Stock
  
  Difficulty: Easy
  Topics: Array, Dynamic Programming
  Runtime: 3 ms
  Memory: 65.49 MB

  Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock
*/

function maxProfit(prices: number[]): number {
  let buyPrice = prices[0];
  let sellPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > sellPrice) {
      sellPrice = prices[i];
    }

    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
      sellPrice = prices[i];
    }

    if (sellPrice - buyPrice > profit) {
      profit = sellPrice - buyPrice;
    }
  }

  return profit;
}
