// ~~~~~ TUGAS PERTAMA ~~~~~ \\

function sapaUser(nama) {
    alert("Hello " + nama + "! Selamat Datang!");
  }
  
  sapaUser("budi");

 // ~~~~~ TUGAS KEDUA ~~~~~ \\

function hitungLuasPersegi(sisi) {
  return sisi * sisi;
}

let luas = hitungLuasPersegi(5);
console.log(luas);
alert(luas);


// ~~~~~ TUGAS KETIGA ~~~~~ \\

function tambah(angka1, angka2) {
  return angka1 + angka2;
}

let hasil = tambah(10, 5);
alert(hasil);
console.log(hasil);   


// ~~~~~ TUGAS KEEMPAT ~~~~~ \\

function cekGanjilGenap(angka) {
  if (angka % 2 == 0) {
    console.log(`Angka ini ${angka} adalah genap`);
  } else {
    console.log(`Angka ini ${angka} adalah ganjil`);
  }
}

cekGanjilGenap(5);
cekGanjilGenap(8);

//  ~~~~~ TUGAS KELIMA ~~~~~ \\

function hitungDiskon(harga, diskon) {
  let jumlahDiskon = harga * (diskon / 100);
  let hargaSetelahDiskon = harga - jumlahDiskon;
  return hargaSetelahDiskon;
}

let hargaSetelahDiskon = hitungDiskon(100000, 20);
console.log(hargaSetelahDiskon);


//  ~~~~~ TUGAS KEENAM ~~~~~ \\

function cekUsiaMengemudi(usia) {
  if (usia >= 17) {
    console.log("Selamat! anda belum bisa mengemudi ");
  } else {
    console.log("Mohon maaf🙏 karna ada masih di bawah umur");
  }
}

cekUsiaMengemudi(16);
cekUsiaMengemudi(18);