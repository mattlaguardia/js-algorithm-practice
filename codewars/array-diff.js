function array_diff(a, b) {
  var i = 0
  var num = 0
  var diff = []

  while (i < a.length) {
    if(a[i] !== b[0]){
      diff.push(a[i])
    }
    i++
  }

  return diff
}

console.log(array_diff([1,2,2,2,3],[1]), "[1, 3]")
