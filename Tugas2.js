function cariPelanggan(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, nama: 'Santi' }), 100);
  });
}

function cekJadwal(namaPelanggan) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ status: 'Tersedia', user: namaPelanggan }), 100);
  });
}

// Promise Chaining
cariPelanggan(101)
  .then(data => {
    console.log(`Mencari jadwal untuk: ${data.nama}`);
    return cekJadwal(data.nama);
  })
  .then(hasil => {
    console.log(`Konfirmasi: Jadwal untuk ${hasil.user} statusnya ${hasil.status}`);
  })
  .catch(err => console.error('Gagal memproses:', err));