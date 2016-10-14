function validCoordinates(coordinates) {
  if(coordinates.split(',').length !== 2){ return false }
    if(coordinates.split('.').length >= 3){ return false }
    if(coordinates.split(',').length >= 3 ){return false}
    coordinates = coordinates.trim().split(',')

    var lat = coordinates[0]
    var lng = coordinates[1]
    var arrLat = lat.split('')
    var arrLng = lng.split('')
    console.log(arrLat)

    for(i = 0; i < arrLat.length; i++){
      var num = parseInt(arrLat[i])
      console.log(num)
      if(num == false && arrLat[i] !== '.' && arrLat[i] !== '-' && arrLat[i] !== ' ' ){ return false }
      else if(lat > -90 && lat < 90 && lng > -180 && lng < 180){ return true }
    }
     for(j = 0; j < arrLng.length; j++){
      var num2 = parseInt(arrLng[j])
      console.log(num2)
      if( num2 == NaN && arrLng[j] !== '.' && arrLng[j] !== '-' && arrLng[j] !== ' ' ){ return false }
      else if( lat > -90 && lat < 90 && lng > -180 && lng < 180){ return true }
    }
    return false
}

console.log(validCoordinates('-23, 25'), true)
console.log(validCoordinates('1e1, 23.245'), false)
