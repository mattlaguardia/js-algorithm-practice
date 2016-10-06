// Given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.

function alphPos(text) {

  // string.charCodeAt(0) - 96
  var t = text
  t = t.toLowerCase().split('')
  for (var i = 0; i < t.length; i++) {
    t[i] = t[i].charCodeAt(0) - 96 + ' '
    if(t[i] < 0 ){
      t[i] = ''
    }
    if(t[i] > 26){
      t[i] = ''
    }
  }
  return t.join('').trim()

}

console.log(alphPos("The sunset sets at twelve o' clockz"), "SOLUTION: 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
