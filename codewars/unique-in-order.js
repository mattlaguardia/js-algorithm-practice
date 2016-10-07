

function uniqueOrder(iterable) {
  var result = []

  if(iterable instanceof Array){
    return iterable.filter((v,i,a) => a.indexOf(v) === i)
  } else {
    var letters = iterable.split('')
    for(i = 0; i<letters.length; i++){
      if(letters[i] !== letters[i+1]){
        result.push(letters[i])
      }
    }
    return result
  }
}


console.log(uniqueOrder('AAAABBBCcDAABBB'), ['A','B','C','D','A','B'])
console.log(uniqueOrder(['a',1, 'b']))
