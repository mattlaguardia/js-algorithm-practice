phoneCall = (min1, min2_10, min11, s) => {
  if( s < min1 ){ return 0 }
  if( s === min1 ){ return 1 }
  var counter = 0

  while(s > 0){
    if( counter === 1 ){
      s = s - min1
      counter++
    }
    if( counter > 10 ){
      s = s - min11
      counter++
    }
    if( counter <= 10 ){
      s = s - min2_10
      counter++
    }
  }
  return counter
}

console.log(phoneCall(3, 1, 2, 20), "Answer: 14")
console.log(phoneCall(10, 1, 2, 22), "Answer: 11")
// figure out the longest possible call
