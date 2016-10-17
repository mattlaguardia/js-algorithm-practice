function add(a, b){
  a = a.split('').reverse()
  b = b.split('').reverse()
  var num1 = 0
  var num2 = 0

  for(i = 0; i < a.length; i++){
    for(j = 0; i < b.length; i++){
      a[i] = parseInt(a[i])
      b[j] = parseInt(b[j])
      if(a[i] === undefined || b[j] === undefined){
        // do something here when one of the arrays runs out of numbers //
      }
      num2 = b + a
    }
  }

}

console.log(add('123', '321'), "Answer: 444")
