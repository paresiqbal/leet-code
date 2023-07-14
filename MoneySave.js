// Tahung 750k
// + bunga 6%
// setiap bulan menyisihkan 3% dari tabungan
// maksimal 3% / 800k

let uang = 750000;
let hasil = 0;

for (let i = 1; i <= 12; i++) {
  let bunga = 0;
  let sisih = 0;

  if (i > 1) {
    // tabungan di kali bunga 6%
    bunga = (uang * 6) / 100;

    if (uang + bunga > 800000) {
      sisih = (800000 * 3) / 100;
    } else {
      sisih = uang + (bunga * 3) / 100;
    }
  }

  hasil += `Tabugan awal: ${uang.toFixed(3)} \n Bunga: ${bunga.toFixed(
    3
  )} \n Sisih: ${sisih.toFixed(3)} \n Uang Bulanan: ${
    uang + bunga - sisih.toFixed(3)
  } \n ------------------------------------------------------ \n`;
  uang = uang + bunga - sisih;
}

console.log(hasil);
