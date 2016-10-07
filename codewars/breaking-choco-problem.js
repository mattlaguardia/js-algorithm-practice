// task is to split chocolate bar of given dimensions (n) x (m) into small squares
// each square is of size 1x1 and unbreakable
// return minimum number of breaks needed
// for example if you are given a chocolate bar of size 2 x 1 you can split it into single squares in just on break
// but for size 3x1 you must do two breaks
function breakC(n, m) {
  var breaks
  if(n == 1 && m == 1){ return 0}
  if(n == 0 && m == 0){ return false}
  breaks = (n * m) - 1
  return breaks
}


console.log(breakC(5,5), 'Solution: 24')
console.log(breakC(1,1), 'Solution: 0')
console.log(breakC(0,0), 'Solution: 0')
