function gcd(a, b){
  if(b == 0){
    return a;
  } else {
    return gcd(b, a%b);
  }
}

console.log("The greatest divisor of 14 and 21 is: " + greatestCommonDivisor(14, 21));
