// Implement a method that accepts 3 integers a,b,c. The method should return true if a triangle can be built with the side of given length and false in any other case.

function isTriangle(a, b, c) {
  if ( a > b + 1){ return true }
  if ( a <= b && b == c ){ return true }
  if ( a == 0 || b == 0 || c == 0 || a > b ){ return false }


  return false
}

console.log(isTriangle(1,2,2), ' true')
console.log(isTriangle(7,2,2), ' false')
