maxMultiple = (divisor, bound) => {
  var result = bound % divisor
  return bound - result
}

console.log(maxMultiple(3, 10), 9)
