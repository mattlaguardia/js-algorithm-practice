function solution(digits) {
  if(digits <= 100000){ return digits }

  var highest
  var max = 0

  for(var i = 0; i <= (digits.toString().split('').length - 5); i++){
    highest = digits.toString().slice(i, i+5)
    if(highest > max){
      max = parseInt(highest)
    }
  }
  return max
}

console.log(solution(283910), "83910")
