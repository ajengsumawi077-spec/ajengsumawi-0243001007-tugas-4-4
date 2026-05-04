// Nama: [Ajeng Sumawi Citra]
// NIM: [0243001007]

const booking = {
  bookingId: 'B-2026',
  totalPrice: 150000,
  customer: { 
    fullName: 'Andi Pratama', 
    memberStatus: 'Gold' 
  },
  date: '2026-05-10'
};

// Destructuring: Mengambil bookingId, totalPrice, dan fullName dari dalam objek customer
const { bookingId, totalPrice, customer: { fullName } } = booking;
console.log(`ID Pesanan: ${bookingId}, Total: ${totalPrice}, Pelanggan: ${fullName}`);

// Spread Operator: Menggabungkan daftar alat olahraga
const alatSewa = ['Bola', 'Rompi'];
const alatBaru = ['Sepatu'];

const daftarFasilitas = [...alatSewa, ...alatBaru];
console.log('Fasilitas yang dipesan:', daftarFasilitas);