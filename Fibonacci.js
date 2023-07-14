let fibonancci = [];
let number1 = 0;
let number2 = 1;

for (let i = 0; i <= 10; i++) {
  if (i === 0 || i === 1) {
    fibonancci = [...fibonancci, i];
  } else {
    let total = number1 + number2;
    fibonancci = [...fibonancci, total];
    number1 = number2;
    number2 = total;
  }
}

console.log(fibonancci);

// Menjumbhlahkan angka sebelum nya dengan angka selanjutnya
// 0 + 1 = 1 Kemudian 1 + 1 = 2 kemudian 2 + 1 = 3 kemudian 3 + 2 = 5 kemudian 5 + 3 = 8 dan seterusnya
