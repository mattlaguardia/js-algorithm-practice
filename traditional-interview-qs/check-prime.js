function isPrime(num){
  // start with 2 because the rule of prime is that number can only be divided by 1 and itself //
  var divisor = 2;

  while(num > divisor){
    // checking with modulous b/c if there is no remainder that means the inputted number is divisible by another number thus meaning that the inputted number is not a prime number //
    if(num % divisor == 0){
      return false;
    } else {
      divisor++;
    }
  }
  return true;
};
// print to the console //
console.log("Is 137 prime? " + isPrime(137));
console.log("Is 237 prime? " + isPrime(237));
