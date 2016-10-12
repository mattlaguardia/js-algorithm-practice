function sumDigPow(a, b) {
  var result = []
  var final = 0
  if(b <= 10 || b > a){
    for(i = a; i < b; i++){
      if(a.toString().split('').length == 1){
        result.push(a)
        a++
      }
      if(a.toString().split('').length > 1){
        result.push(a)
        a++
      }
    }
  }
  return result
}


console.log(sumDigPow(1,10), [1,2,3,4,5,6,7,8,9])
console.log(sumDigPow(50, 150), [89, 135])
