function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && c + b > a) {
    return true
  }
  return false
}

console.log(isTriangle(1,2,2), true)
