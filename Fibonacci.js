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
