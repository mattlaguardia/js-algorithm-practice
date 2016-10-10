function sumDigPow(a, b) {
  var counter = 1
  var result = []

  while( counter < b ){
    result.push(counter)
    counter++
  }
  return result
}


console.log(sumDigPow(1,10), [1,2,3,4,5,6,7,8,9])
