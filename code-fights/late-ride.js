lateRide = (n) => {
  var arr = []
  var hours = Math.floor(n / 60)
  var mins = n % 60

  if( hours >= 10 ){
    hours = hours.toString().split('')
    hours = parseInt(hours[0]) + parseInt(hours[1])
  }
  if( mins >= 10 ){
    mins = mins.toString().split('')
    mins = parseInt(mins[0]) + parseInt(mins[1])
  }
  return hours + mins
}

console.log(lateRide(240), 4)
console.log(lateRide(808), 14)
console.log(lateRide(1439), 19)
