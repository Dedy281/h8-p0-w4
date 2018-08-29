function makanTerusRekursif(waktu) {
  var hitung = 0;
  if (waktu > 0) {
    hitung = hitung + 1
    return hitung + makanTerusRekursif(waktu - 15)
  } else {
    return hitung
  }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0