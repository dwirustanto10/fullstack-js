// // function
// function hello() {
//   console.log('Selamat pagi');
// }
// // function di jalankan setelah d panggil
// hello();

// function dalam kurung bisa di isi variabel
// function hello(n) {
//   console.log('Selamat pagi' + n);
// }
// // function di jalankan setelah d panggil
// hello('Selaamat pagi peserta');

// mencetak bilangan ganjil apa genap
// function bilangan(g) {
//   if (g % 2 === 0) {
//     console.log('Hari ini berlaku/khusus untuk plat no Genap');
//   } else {
//     console.log('Hari ini berlaku/khusus untuk plat no Ganjil');
//   }
// }

// bilangan(1304);

// function splitToArray(stringnya) {
//   var temparray = stringnya.split(' ');
//   return temparray;
// }
// function jmlKata(kalimatnya) {
//   var hasilspilt = splitToArray(kalimatnya);
//   var arrayLength = hasilspilt.length;
//   return arrayLength;
// }
// console.log(jmlKata('selamat siang kawan ku semua'));

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return a / b;
}

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}
function modulus(a, b) {
  return a % b;
}
function calculatorUtama(a, b, operasi) {
  var hasil;
  switch (operasi) {
    case 'kali':
      hasil = kali(a, b);
      break;
    case 'bagi':
      hasil = bagi(a, b);
      break;
    case 'tambah':
      hasil = tambah(a, b);
      break;
    case 'kurang':
      hasil = kurang(a, b);
      break;
    case 'modulus':
      hasil = modulus(a, b);
      break;

    default:
      hasil = 0;
  }
  return hasil;
}

// var result = calculatorUtama(4, 4, 'bagi');
var result = calculatorUtama(8, 4, 'bagi');
var memory = [0];
memory.push(result);

console.log(result);
console.log(memory);
