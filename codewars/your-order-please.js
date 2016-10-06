// Task: Sort a given string words. Each word in the string will contain a single number. This number tells you which position the word should be placed in the result. Numbers range from 1 -> 9.

function order(words){

  var result = []
  var arr = words.split(' ')

  for(i = 0; i < arr.length; i++){
    var key = arr[i].split(/ /)[0].replace(/[^\d]/g, '')
    // .replace(/[^d]/g,'') --> Replaces all none digits
    result[key] = arr[i]
  }

  return result.join(' ').trim()

}

console.log(order("is2 Thi1s T4est 3a") + " Thi1s is2 3a T4est")

// Other Option Someone Had //
function otherOrder(words){
  return words.split(' ').sort(function(a, b){
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}

console.log(otherOrder("is2 Thi1s T4est 3a") + " Thi1s is2 3a T4est")
