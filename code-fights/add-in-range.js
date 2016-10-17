addInRange = (lower, upper) => {
  return (upper*(upper+1) - lower*(lower-1))/2
}

console.log(addInRange(-10 , -1), -55)
console.log(addInRange(0, 3), 6)
