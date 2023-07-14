let prima = [];

for (let i = 1; i < 100; i++) {
  let bilangan = 0;

  for (let a = 1; a <= i; a++) {
    if (i % a == 0) {
      bilangan = bilangan + 1;
    }
  }

  if (bilangan == 2) {
    prima = [...prima, i];
  }
}

console.log(prima);
