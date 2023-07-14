// Tahung 750k
// + bunga 6%
// setiap bulan menyisihkan 3% dari tabungan
// maksimal 3% / 800k

let uangAndi = 750000;
let hasil = "";

for (let i = 1; i <= 12; i++) {
  let bunga = 0;
  let sisih = 0;
  if (i > 1) {
    bunga = (uangAndi * 6) / 100;
    if (uangAndi + bunga > 800000) {
      sisih = (800000 * 3) / 100;
    } else {
      sisih = ((uangAndi + bunga) * 3) / 100;
    }
  }

  hasil += `Tabungan Awal : ${uangAndi.toFixed(2)} \n Bunga : ${bunga.toFixed(
    2
  )} \n Sisih : ${sisih.toFixed(2)} \n Uang Bulang ${i} : ${(
    uangAndi +
    bunga -
    sisih
  ).toFixed(2)} \n------------------\n`;
  uangAndi = uangAndi + bunga - sisih;
}

console.log(hasil);
