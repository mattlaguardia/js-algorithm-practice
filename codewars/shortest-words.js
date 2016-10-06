// Given a string of words, return the length of the shortest word(s)

function findShort(s) {
  var words = s.split(' ')
  var i = 0
  var short = words[0].length

  while(i < words.length){
    if (short > words[i].length) {
      short = words[i].length
    }
    i++
  }
  return parseInt(short)
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3)
