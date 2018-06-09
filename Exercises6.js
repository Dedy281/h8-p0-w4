function hitungHuruf(kata) {
  var pisah =kata.split(' ');
  var count = 0;

  for(var i = 0; i < pisah.length; i++){
    var word = pisah[i];
    for(var j = 0; j < word.length; j++){
      var letter = word[j];
      for(var k = 0; k < word.length; k++){
        if(j !== k)
        if(letter === word[k]){
          count++;

          if(count > 1){
          return word;
          }
        }
      }
    }
  } 
  return -1;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau