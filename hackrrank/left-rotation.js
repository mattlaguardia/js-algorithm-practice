function functionName(a, k) {
  var n = a[k]
  var i = k

  if (k > n) {
      i = k % n
  }

  return ([a.splice(i, n).join(' ')].concat(a).join(' '));
}

console.log(functionName([1,2,3,4,3,6], 4), 'Answer: [1,2,3,5,4]')
