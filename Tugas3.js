async function kirimPembayaran(jumlah) {
  // Simulasi sukses 60%, gagal 40%
  if (Math.random() > 0.4) {
    return { status: 'Lunas', ref: 'REF-999' };
  } else {
    throw new Error('Koneksi Bank Sibuk');
  }
}

async function bayarBooking(jumlah, batasCoba = 3) {
  for (let i = 1; i <= batasCoba; i++) {
    try {
      console.log(`Percobaan Bayar ke-${i}...`);
      const sukses = await kirimPembayaran(jumlah);
      console.log('Pembayaran Berhasil! Kode Ref:', sukses.ref);
      return sukses;
    } catch (err) {
      console.log(`Gagal pada percobaan ${i}: ${err.message}`);
      
      if (i === batasCoba) {
        console.log('Maaf, silakan coba beberapa saat lagi.');
        throw err;
      }
      
      // Tunggu 1,5 detik sebelum coba lagi (agar berbeda dengan contoh)
      await new Promise(res => setTimeout(res, 1500));
    }
  }
}

bayarBooking(150000);