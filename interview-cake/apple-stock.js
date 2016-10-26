var stockPricesYesterday = [10, 7, 5, 8, 11, 9]

getMaxProfit = (stockPricesYesterday) => {
  var arr = stockPricesYesterday.sort()
  var last = arr[arr.length - 1]
  var first = arr[0]

  return last - first
}

// its not great to just do a sort because what if prices were negative all day
// also you need to buy low and sell high, so the low price has to fall before the high prices
// you would need to loop through the array and grab the lowest number and highest number with their timestamps
