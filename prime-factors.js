// start by creating a funtion that has an empty array for the prime factors and a divisor varialbe that we are going to us as the numbers leading up to the inputted number //

function primeFactors(num){
  var factors = [];
  var divisor = 2;

  // the while loop that is going to check to see if the divisor is a prime number or not //

  while(num > 2){
    if(num % divisor == 0){
      factors.push(divisor);
      num = num / divisor;
      // need to set this so we can get to 1 and stop the while loop //
    } else {
      divisor++;
    }
  }
  return factors
}

console.log("The number 123 has these prime factors: " + primeFactors(123));
