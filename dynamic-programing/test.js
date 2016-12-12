function factorial(num) {
  if ( num === 1 ) {
    return 1;
  }

  var r = (factorial(num - 1))
  console.log(num)
  return r

}
console.log(factorial(5))
