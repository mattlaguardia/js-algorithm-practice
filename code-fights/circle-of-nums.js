circleOfNumbers = (n, firstNumber) => {
  if(firstNumber > n/2){ return (firstNumber + Math.round(n/2)) - n }
  if(firstNumber == n/2){ return 0 }
  return firstNumber + Math.round(n/2)
}

console.log(circleOfNumbers(10, 2), 7)
console.log(circleOfNumbers(10, 7), 2)
console.log(circleOfNumbers(6, 3), 0)
