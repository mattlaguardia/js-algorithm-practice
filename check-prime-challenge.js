// the more challengeing prime checker //
// the purpose of this version is if you have a very large number and wanted to save time //

function isPrime(num){
  // just checking 1/3s to see if number is prime or not //
  var divisor = 3;
  var limit = Math.sqrt(num);

  // check simple cases aka small numbers //
  if(num == 2 || num == 3){
    return true;
  }
  if(num % 2 == 0){
    return false;
  }

  while(divisor <= limit){
    if(num % divisor == 0){
      return false;
    } else {
      divisor += 2;
    }
  }
  return true;
}

// number checks to see if functions work //
console.log("Is 10001 prime? " + isPrime(10001));
