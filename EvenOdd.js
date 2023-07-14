let genap = [];
let ganjil = [];

for (let i = 1; i < 100; i++) {
  if (i % 2 == 00) {
    genap = [...genap, i];
  } else {
    ganjil = [...ganjil, i];
  }
}

console.log({ genap, ganjil });
