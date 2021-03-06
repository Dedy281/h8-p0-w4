function cariModus(arr){
    var angkaSama = 0;
    var angkaSama2 = 0;
    var modus = 0;
  
    for(var i = 0; i < arr.length; i++)
    {
      for(var j = 0; j < arr.length; j++)
      {
        if(arr[i] === arr[j] && i !== j)
        {
          angkaSama ++;
        }
        if(angkaSama > angkaSama2)
        {
          angkaSama2 = angkaSama;
          modus = i;
        }
      }
    }
    if(modus === 0)
      {
        return -1;
      }
    var semuaSama = 0;
    for(var k = 0; k < arr.length; k++)
    { semuaSama += arr[k];
      if(semuaSama/arr.length === arr[k])
      {
        return -1;
      }
    }
    return arr[modus];
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1