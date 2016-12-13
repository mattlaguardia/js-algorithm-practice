
///////////////////////////////////////
// EXAMPLE 1
///////////////////////////////////////
function printAll(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
printAll([1,2,3,4,5])

// Linear time complexity O(n)

///////////////////////////////////////
// EXAMPLE 2
///////////////////////////////////////
function sumProduct(arr) {
  var sum = 0
  var product = 1

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  for (var j = 0; j < arr.length; j++) {
    product *= arr[j]
  }

  console.log(sum + ', ' + product)
}
sumProduct([1,2,3,4,5])

// Total computations: 2n + 3
// Reduce: Linear time complexity = O(n)

///////////////////////////////////////
// EXAMPLE 3
///////////////////////////////////////
function remainderPairs(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      console.log(arr[i]%arr[j])
    }
  }
}
remainderPairs([1,2,3,4,5])

// Total computations: n * n * 1
// Reduce: Quadratic time complexity = n^2 = O(n^2)

///////////////////////////////////////
// EXAMPLE 4
///////////////////////////////////////
function battles(ninjas, monsters) {
  for (var i = 0; i < ninjas.length; i++) {
    for (var j = 0; j < monsters.length; j++) {
      console.log(ninjas[i] + " vs. " + monsters[j])
    }
  }
}
battles([1,2,3,4], [5,6,7])

// Total computations: n * m * 1
// Reduce: Linear time complexity = O(nm)
