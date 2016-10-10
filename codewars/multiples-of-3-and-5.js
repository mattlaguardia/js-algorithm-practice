function solution(number){
  var result = 0
  var i = 1

  while(i < number){
    if(i % 3 == 0 || i % 5 == 0){
      result = result + i
    }
    i++
  }
  return result
}


console.log(solution(10))
