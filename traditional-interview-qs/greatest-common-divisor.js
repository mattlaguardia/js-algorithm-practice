function greatestCommonDivisor(a, b){
  var divisor = 2;
  var greatestDivisor = 1;

  // need an if statement that rules out 1 //
  if(a < 2 || b < 2) { return 1 }

  while(a >= divisor && b >= divisor){
    if(a % divisor == 0 && b % divisor == 0){
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}
console.log("The greatest divisor of 14 and 21 is: " + greatestCommonDivisor(14, 21));
