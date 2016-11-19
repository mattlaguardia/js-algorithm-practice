// Question: Given two strings, is one a permutation of the other? //

const permutation = (one, two) => {
  if(typeof one !== 'string' || typeof two !== 'string'){
    throw new Error('The given word is not a string')
  }
  if(one.length !== two.length){ return false }

  var letters = []
  var i

  for(i = 0; i < one.length; i++){
    letters[one[i].charCodeAt()] = letters[one[i].charCodeAt()] || 0 + 1
  }
  for(i = 0; i < two.length; i++){
    letters[two[i].charCodeAt()] = letters[two[i].charCodeAt()] || 0 - 1
    if(letters[two[i].charCodeAt()] < 0){ return false }
  }

  return true
}
