seatsInTheater = (nCols, nRows, col, row) => {
  var result

  result = ((nCols - (col - 1)) * (nRows - row))

  return result
}

console.log(seatsInTheater(16, 11, 5, 3), 96)
