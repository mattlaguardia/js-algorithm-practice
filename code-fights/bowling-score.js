const bowlingScore = (rolls) => {
  var results = 0

  for(i = 0; i < rolls.length - 1; i = i + 2){
    if(rolls[i+1] == 10 && rolls[i] == 10){
      rolls[i] = 30
      rolls[i+1] = 30
    }
    if(rolls[i] === 10){ rolls[i] = 30 }
    results = results + rolls[i] + rolls[i+1]
    console.log(results)
  }
  return results
}

console.log(boilingScore([10,10,10,4,9,1,0,10,3,3]), "Answer: 120")
// 10 = 30 points
// other wise number of pins = number that get knocked down
