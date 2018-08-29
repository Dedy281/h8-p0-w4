function digitPerkalianMinimum(angka) {
    var smallNumber = Number.MAX_SAFE_INTEGER;
    for(var i = 1; i <= Math.round(Math.sqrt(angka)); i++){

        if(angka%i===0){
            var str1 = String(i);
            var str2 = String(angka/i);
            var collect = (str1+str2).length;
        
            if(smallNumber > collect){
                smallNumber = collect;
            }
        }
    }
    return smallNumber; 
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2