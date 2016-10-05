var input = '3 2 3' + '\n' + '1 2 3' + '\n' + '0' + '\n' + '1' + '\n' + '2'

function circularArr (input) {
  var lines = input.split('\n')
  var arr = lines[1].split(' ')
  var k = lines[0].split(' ')[1];
  var n = arr.length;

  for(i = 2; i < lines.length; i++){
    pos = (n + (lines[i] - (k % n))) % n;
    console.log(arr[pos])
  }
}

circularArr(input);
