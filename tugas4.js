// Kelas Induk: Kapal
class Kapal {
  constructor(nama, panjang, lebar, kapasitas) {
    this.nama = nama;
    this.panjang = panjang; // Simpan nilai panjang
    this.lebar = lebar; // Simpan nilai lebar
    this.kapasitas = kapasitas; // Inisialisasi kapasitas
  }
}

// Subclass: KapalPenumpang
class KapalPenumpang extends Kapal {
  infoKapal() {
    return `Kapal Penumpang ${this.nama} yang berukuran ${this.panjang} m x ${this.lebar} m dan dapat menampung ${this.kapasitas} penumpang.`;
  }
}

// Subclass: KapalNelayan
class KapalNelayan extends Kapal {
  infoKapal() {
    return `Kapal Nelayan ${this.nama} dirancang untuk menangkap ikan.`;
  }
}

// Kelas Induk: Penumpang
class Penumpang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  infoPenumpang() {
    return `Nama: ${this.nama}, Umur: ${this.umur}`;
  }
}

// Subclass: PenumpangDewasa
class PenumpangDewasa extends Penumpang {
  infoPenumpang() {
    return `Kapal Ferry penumpang orang Dewasa - ${super.infoPenumpang()}`;
  }
}

// Subclass: PenumpangAnak
class PenumpangAnak extends Penumpang {
  infoPenumpang() {
    return `Kapal Ferry penumpang orang Anak - ${super.infoPenumpang()}`;
  }
}

// Kelas Induk: Ikan
class Ikan {
  constructor(nama) {
    this.nama = nama; // Nama ikan
  }

  infoIkan() {
    return `Kapal Nelayan menangkap ikan ${this.nama}.`;
  }
}

// Subclass: IkanTuna
class IkanTuna extends Ikan {
  infoIkan() {
    return `Kapal Nelayan menangkap ikan Tuna ${this.nama}.`;
  }
}

// Kelas Induk: Pelabuhan
class Pelabuhan {
  constructor(nama, lokasi) {
    this.nama = nama;
    this.lokasi = lokasi;
  }

  infoPelabuhan() {
    return `Pelabuhan ${this.nama} terletak di ${this.lokasi}.`;
  }
}

// Subclass: PelabuhanKargo
class PelabuhanKargo extends Pelabuhan {
  infoPelabuhan() {
    return `Pelabuhan Kargo ${this.nama} yang terletak di ${this.lokasi} khusus untuk pengiriman barang.`;
  }
}

// Subclass: PelabuhanFerry
class PelabuhanFerry extends Pelabuhan {
  infoPelabuhan() {
    return `Pelabuhan Ferry ${this.nama} yang terletak di ${this.lokasi} melayani transportasi penumpang.`;
  }
}

// Kelas Induk: Rute
class Rute {
  constructor(dari, ke) {
    this.dari = dari;
    this.ke = ke;
  }

  infoRute() {
    return `Kapal Ferry dengan Rute dari ${this.dari} ke ${this.ke}.`;
  }
}

// Subclass: RuteKargo
class RuteKargo extends Rute {
  infoRute() {
    return `Rute Kargo dari ${this.dari} ke ${this.ke} untuk pengiriman barang.`;
  }
}

// Subclass: RuteFerry
class RuteFerry extends Rute {
  infoRute() {
    return `Rute Ferry dari ${this.dari} ke ${this.ke} untuk transportasi penumpang.`;
  }
}

// Fungsi untuk menampilkan informasi kapal
function tampilkanInfoKapal(kapal) {
  console.log(kapal.infoKapal());
}

// Fungsi untuk menampilkan informasi penumpang
function tampilkanInfoPenumpang(penumpang) {
  console.log(penumpang.infoPenumpang());
}

// Fungsi untuk menampilkan informasi ikan
function tampilkanInfoIkan(ikan) {
  console.log(ikan.infoIkan());
}

// Fungsi untuk menampilkan informasi pelabuhan
function tampilkanInfoPelabuhan(pelabuhan) {
  console.log(pelabuhan.infoPelabuhan());
}

// Fungsi untuk menampilkan informasi rute
function tampilkanInfoRute(rute) {
  console.log(rute.infoRute());
}

// Membuat objek pelabuhan
const pelabuhan1 = new PelabuhanFerry("Pelabuhan Ikan Salmon", "Jakarta");
const pelabuhan2 = new PelabuhanKargo("Pelabuhan Ikan Tuna", "Surabaya");

// Membuat objek kapal
const kapal1 = new KapalPenumpang("Ferry", 100, 250, 300); // Kapasitas ditambahkan
const kapal2 = new KapalNelayan("Budi", 15, 4, 2); // Menyediakan panjang, lebar, dan kapasitas

// Membuat objek penumpang
const penumpang1 = new PenumpangDewasa("Alice", 30);
const penumpang2 = new PenumpangAnak("Tommy", 10);

// Membuat objek ikan
const ikan1 = new IkanTuna("Tuna Biru");

// Membuat objek rute
const ruteFerry = new RuteFerry("Surabaya", "Merak");
const ruteKargo = new RuteKargo("Jakarta", "Semarang");

// Menggunakan fungsi dengan objek yang berbeda
tampilkanInfoKapal(kapal1); // Kapal Penumpang Ferry yang berukuran 100 m x 250 m dan dapat menampung 300 penumpang.
tampilkanInfoPenumpang(penumpang1); // Dewasa - Nama: Alice, Umur: 30
tampilkanInfoPenumpang(penumpang2); // Anak - Nama: Tommy, Umur: 10
tampilkanInfoRute(ruteFerry); // Rute Ferry dari Surabaya ke Merak untuk transportasi penumpang.
tampilkanInfoKapal(kapal2); // Kapal Nelayan Budi dirancang untuk menangkap ikan.
tampilkanInfoIkan(ikan1); // Kapal Nelayan menangkap ikan Tuna Tuna Biru.
tampilkanInfoPelabuhan(pelabuhan1); // Pelabuhan Ferry Pelabuhan Ikan Salmon terletak di Jakarta.
tampilkanInfoPelabuhan(pelabuhan2); // Pelabuhan Kargo Pelabuhan Ikan Tuna terletak di Surabaya.
tampilkanInfoRute(ruteKargo); // Rute Kargo dari Jakarta ke Semarang untuk pengiriman barang.
