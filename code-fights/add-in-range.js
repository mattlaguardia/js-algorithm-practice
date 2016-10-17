addInRange = (lower, upper) => {
  // if(lower === upper){ return lower }
  // if(upper < lower){ return false }
  //
  // var sum = 0
  // for(i = lower; i <= upper; i++){
  //   sum = sum + i
  // }
  // return sum
  return (upper*(upper+1) - lower*(lower-1))/2
}

console.log(addInRange(-10 , -1), -55)
console.log(addInRange(0, 3), 6)
