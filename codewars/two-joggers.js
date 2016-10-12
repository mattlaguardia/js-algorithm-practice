function nbrOfLaps(x, y) {
  for(i = x; i > 1; i--){
    if( x%i === 0 && y%i === 0){
      x = x/i
      y = y/i
    }
  }

  return [y, x]
}


console.log(nbrOfLaps(5, 3), 'x = 5, y = 3 The number of laps for Bob is wrong. Expected 3, got ' + nbrOfLaps(5, 3)[0] + '!')
