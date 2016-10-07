function accum(s) {
  var result = []
  var arr = s.split('')

  for(i = 0; i<arr.length; i++){
    num = parseInt(i)
    first = arr[i].toUpperCase()
    for(j = 0; j<num; j++){
      first = first + arr[i].toLowerCase()
    }
    result.push(first + '-')
  }
  return result.join('').slice(0,-1)
}


console.log(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")
