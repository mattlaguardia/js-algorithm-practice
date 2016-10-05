function persistence(num) {
   //code me
   num = num.toString()

   var count = 0

   while(num.length !== 1){
     var i = 0
     var first = 1

     while(i < num.length){
       first *= parseInt(num[i])
       i++
     }
     num = first.toString()
     count++
   }
   return count
}

console.log(persistence(39))
console.log(persistence(999))
