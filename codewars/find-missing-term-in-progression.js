function findMissing(list) {
  var num = 0
  if(list[0] < 0 && list.length >=2){
    var diff = (list[1] - list[0])
    var otherDiff = (list[2] - list[1])
    if(diff !== otherDiff){
      return (list[0] + otherDiff)
    }
    for(i = 0; i < list.length - 1; i++){
      var j = (list[i+1] + list[i])
      if(j !== diff){
        num = (list[i] + diff)
      }
    }
  }
  if(list.length >= 2){
    var diff = (list[1] - list[0])
    var otherDiff = (list[2] - list[1])

    if(diff !== otherDiff){
      return list[0] + otherDiff
    }

    for(i = 0; i < list.length - 1; i++){
      var j = (list[i+1] - list[i])
      if(j !== diff){
        num = (list[i] + diff)
      }
    }
  }
  return num
}


console.log(findMissing([-5,-1,1,3,5,7,9,11]), "Answer: " + 7)
