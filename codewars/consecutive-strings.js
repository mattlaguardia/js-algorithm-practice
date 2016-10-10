function longestConsec(strArr, k) {
  if( k <= 0 ){ return ''}

  var final = strArr.map((a, i) => strArr.slice(i, i+k).join(''))
  console.log(final)
  var result = ''
  var counter = 0

  for(i = 0; i < final.length-1; i++){
    if(final[i].length > final[i+1].length && final[i].length > result.length){ result = final[i] }
    if(final[i + 1].length > result.length) { result = final[i + 1] }
    if(final[i].length == final[i+1].length){ result = final[i] }
  }

  return result
}

console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
