var n = 6;
function staircase (n) {

  for(i = 0; i < n; i++) {
    var space = '';

    for(j = 0; j < n; j++) {
      if (n - i - 2 < j) {
        space += "#"
      } else {
        space += ' ';
      }
    }
    console.log(space);
  }

}
staircase(n)
