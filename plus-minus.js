
var n = 6;
var array = [ -4, 3, -9, 0, 4, 1 , 0];

function plusMinus(arr) {
  var pos = 0;
  var neg = 0;
  var zer = 0;

  for(i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      pos++;
    }
    if(arr[i] === 0){
      zer++
    }
    if(arr[i] < 0){
      neg++
    }
  }
  return console.log([(pos/6), (neg/6), (zer/6)])
}

plusMinus(array);
