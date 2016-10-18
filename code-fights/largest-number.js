largestNumber = (n) => {
  if(n == 1){ return 9 }

  var i = 0
  var result = []

  while(i < n){
    result.push(9)
    i++
  }
  return parseInt(result.join(''))
}

console.log(largestNumber(4), 99)
