// Square every digit in a number
// Example 9119 => 811181

function squareDigits(num) {
  var n = num.toString().split('')

  var result = []

  for(i = 0; i < n.length; i++){
    result.push(n[i]*n[i])
  }

  return parseInt(result.join(''))
}


console.log(squareDigits(9119))
