function longestConsec(strArr, k) {
  if( k <= 0 || strArr.length <=   k ){ return ''}
  var result = []
  var final = []

  for(i = 0; i < strArr.length-1; i++){
    if(strArr[i].length >= strArr[i+1].length){ result.push(strArr[i]) }
    if(strArr[i+1].length > strArr[i]){ result.push(strArr[i])}
  }
  for(i = 0; i < k; i ++){
    final.push(result[i])
  }
  console.log(final)
  return final.join('')
}

console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
