// Check dupe array
// count it

const array = [1, 3, 5, 7, 3, 1, 5, 8, 0, 8, 6, 4, 2, 5, 7, 9, 0, 3, 4, 5, 8];
let dupeArray = [];
let dupeCount = "";

for (let i = 0; i < array.length; i++) {
  let ketemu = false;

  // run after dupeArray filled
  for (let a = 0; a < dupeArray.length; a++) {
    if (array[i] == dupeArray[a]) {
      ketemu = true;
    }
  }

  if (!ketemu) {
    dupeArray = [...dupeArray, array[i]];

    let totalKetemu = 0;
    // check first loop value and this loop value
    for (let b = 0; b < array.length; b++) {
      if (array[i] == array[b]) {
        totalKetemu = totalKetemu + 1;
      }
    }

    dupeCount += `Angka ${array[i]} sebanyak ${totalKetemu} \n`;
  }
}

console.log(dupeArray);
console.log(dupeArray.length);
console.log(dupeCount);
