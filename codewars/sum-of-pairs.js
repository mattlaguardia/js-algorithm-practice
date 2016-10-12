function sumPairs(ints, s) {
  // var i = 0
  // var result = []
  // var seen = {}
  //
  // while(i < ints.length){
  //   for(j = i + 1; j < ints.length; j++){
  //     if(ints[i] + ints[j] === s){
  //       result = [ints[i], ints[j]]
  //       if(counter > )
  //     }
  //     counter++
  //   }
  //   i++
  // }
  // return result
  //

  // The way that this code works is that it is checking if the integer is equal to the sum minus current integer, which has been saved as an object
  // If it has we now have the current integer, and the previous integer we're done
  // If it isn't -- we save the current integer in the object
  // It "saves" an integer by using the object as an array, and putting "true" at that index.
  // Now if an integer wasn't already saved, that index would === undefined, which in javascript is cast to false
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
    // this will return the best answer
    if (seen[s - ints[i]]){ return [s - ints[i], ints[i]] }
    // this is setting which sets have been seen
    seen[ints[i]] = true
  }
}



console.log(sumPairs([10,5,2,3,7,5], 10), "Answer: [3, 7]")
console.log(sumPairs([4, 3, 2, 3, 4], 6), "Answer: [4, 2]")
