function highAndLow(numbers){
  numbers = numbers.split(' ')
  var result = []
  var highest = parseInt(numbers[0])
  var lowest = parseInt(numbers[0])

  for(i = 0; i < numbers.length-1; i++){
    var num = parseInt(numbers[i])
    var num2 = parseInt(numbers[i+1])
    if( num > num2 && num > highest ){ highest = num }
    if( num2 > highest ){ highest = num2 }
    if( num < num2 && num < lowest ){ lowest = num }
    if( num2 < lowest ){ lowest = num2 }
  }


  return highest + ' ' + lowest
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214")
