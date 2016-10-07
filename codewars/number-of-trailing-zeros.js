
function zeros(n) {

  if(n == 0){ return 0 }

  var k = parseInt(Math.log(n)/Math.log(5))
  var m = 5^k
  var final = n*((m-1)/(4*m))

  console.log(final)
  return Math.round(final)

}

console.log(zeros(12), "2")
console.log(zeros(30), "2")
