function prime(num) {
  // Generate an array containing every prime number between 0 and the num specified (inclusive)
  var divisor = 2;
  var primeNums = []

  while(num > divisor) {
    if(num % divisor == 0 ){
      return false;
     } else {
     primeNums.push(divisor);
     divisor++;
     };
  };
  return primeNums;
};

prime(11);
