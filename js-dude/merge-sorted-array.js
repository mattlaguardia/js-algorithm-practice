mergeSortedArray = (arrA, arrB) => {
  var aElm = arrA[0],
    bElm = arrB[0],
    result = [],
    i = 1,
    j = 1

    if(arrA.length == 0 || arrB.length == 0){
      return result = arrA.concat(arrB)
    }

// if aElm or bElm exists we will insert to merged array (will go inside while loop).. to insert: aElm exists and bElm doesn't exist or both exist and aElm < bElm.. this is the critical part of the example //

    while(aElm || bElm){
      if(aElm && !bElm || aElm < bElm){
        result.push(aElm)
        aElm = arrA[i++]
      }
      else {
        result.push(bElm)
        bElm = arrB[j++]
      }
    }
  return result
}

console.log(mergeSortedArray([2,5,6,9], [1,2,3,29]), " = [1, 2, 2, 3, 5, 6, 9, 29]")
