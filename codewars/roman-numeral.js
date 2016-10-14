function romanNumeral(roman) {
  var result
  result = roman.split('')
  var romanNums = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
  var num = 0
  var last = result.length

  if(result[last-1] == "V" && result[last - 2] == "I"){
    for(i = 0; i < result.length - 2; i++){
      for( var key in romanNums ){
        if( result[i] === key ){
          num = num + romanNums[key]
        }
      }
    }
    num = num + 4
  }
  else {
    for(i = 0; i < result.length; i++){
      for( var key in romanNums ){
        if( result[i] === key ){
          num = num + romanNums[key]
        }
      }
    }
  }
  return num
}

console.log(romanNumeral('XXIV'), "Answer: " + 24)
