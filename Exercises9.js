function tukarBesarKecil(kalimat) {
    var splitSentence = kalimat.split('');
    var collect = [];

    for(var i = 0; i < kalimat.length; i++){
        if(splitSentence[i] === splitSentence[i].toUpperCase()){
            collect[i] = splitSentence[i].toLowerCase();
        }
        else{
            collect[i] = splitSentence[i].toUpperCase();
        }
    }
    return collect.join('');
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"