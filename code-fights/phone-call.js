phoneCall = (min1, min2_10, min11, s) => {
  if( s < min1 ){ return 0 }
  if( s === min1 ){ return 1 }
  var minutes = 1
  s = s - min1

  while(s >= 0){
    if(minutes <= 10){
      s = s - min2_10
        minutes++
    }
    s = s - min11
    minutes++
  }
  return minutes
}

console.log(phoneCall(3, 1, 2, 20), "Answer: 14")
console.log(phoneCall(10, 1, 2, 22), "Answer: 11")
// figure out the longest possible call
