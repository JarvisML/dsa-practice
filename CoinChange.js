function CoinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0 && dp[i - coin] !== Number.MAX_SAFE_INTEGER) {
        dp[i] = 1 + dp[i - coin];
      }
    }
  }

  if (dp[amount] === Number.MAX_SAFE_INTEGER) {
    return -1;
  }

  return dp[amount];
}

const coins = [1,2,5];

const result = CoinChange(coins, 4);

console.log(result);
