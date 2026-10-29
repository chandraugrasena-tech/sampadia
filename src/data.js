export const topics = [
  { id: "jenis", label: "Jenis sampah", intro: "Kenali dulu jenis sampahmu. Dari sini kita tahu cara menanganinya.",
    items: [
      { title: "Organik", color: "bg-emerald-50 border-emerald-200", text: "Berasal dari makhluk hidup dan mudah membusuk. Contoh: sisa makanan, kulit buah, daun kering. Bisa dijadikan kompos." },
      { title: "Anorganik", color: "bg-amber-50 border-amber-200", text: "Sulit membusuk. Contoh: plastik, kaleng, kaca, kertas. Banyak yang bisa didaur ulang." },
      { title: "B3 (Berbahaya)", color: "bg-rose-50 border-rose-200", text: "Mengandung bahan berbahaya. Contoh: baterai, lampu neon, obat kedaluwarsa, cat. Jangan dicampur dengan sampah lain." }
    ] },
  { id: "pilah", label: "Cara memilah", intro: "Memilah di rumah itu mudah kalau punya sistem yang jelas.",
    items: [
      { title: "1. Siapkan 3 wadah", color: "bg-brand-50 border-brand-200", text: "Satu untuk organik, satu untuk anorganik, satu kecil untuk B3. Beri label agar semua anggota keluarga paham." },
      { title: "2. Bersihkan dulu", color: "bg-brand-50 border-brand-200", text: "Bilas botol, kaleng, dan wadah makanan. Sampah bersih lebih mudah diterima bank sampah." },
      { title: "3. Pisahkan yang bisa dijual", color: "bg-brand-50 border-brand-200", text: "Kardus, botol plastik, dan kaleng bisa ditukar uang di bank sampah terdekat." }
    ] },
  { id: "3r", label: "Prinsip 3R", intro: "Urutannya penting: kurangi dulu, pakai ulang, baru daur ulang.",
    items: [
      { title: "Reduce (Kurangi)", color: "bg-sky-50 border-sky-200", text: "Kurangi sampah dari sumbernya. Bawa tas belanja dan botol minum sendiri, hindari kemasan sekali pakai." },
      { title: "Reuse (Pakai ulang)", color: "bg-violet-50 border-violet-200", text: "Pakai lagi barang yang masih layak. Toples bekas jadi tempat bumbu, kaus lama jadi lap." },
      { title: "Recycle (Daur ulang)", color: "bg-emerald-50 border-emerald-200", text: "Olah sampah menjadi barang baru. Serahkan sampah anorganik yang bersih ke bank sampah atau pengepul." }
    ] },
  { id: "kompos", label: "Kompos & kreasi", intro: "Ubah sampah dapur jadi pupuk, dan sampah bekas jadi barang berguna.",
    items: [
      { title: "Membuat kompos", color: "bg-emerald-50 border-emerald-200", text: "Campur sisa dapur (bahan hijau) dengan daun kering (bahan cokelat). Jaga tetap lembap, aduk seminggu sekali. Siap dipakai setelah 4-8 minggu." },
      { title: "Pot dari botol bekas", color: "bg-amber-50 border-amber-200", text: "Potong botol plastik, lubangi bagian bawah, isi tanah. Cocok untuk cabai, bawang daun, atau kangkung." },
      { title: "Ecobrick", color: "bg-sky-50 border-sky-200", text: "Padatkan sampah plastik bersih dan kering ke dalam botol sampai keras. Bisa jadi bangku atau dinding taman." }
    ] }
];

export const questions = [
  { q: "Kulit pisang termasuk sampah apa?", o: ["Organik", "Anorganik", "B3"], a: 0, e: "Kulit pisang berasal dari tumbuhan dan mudah membusuk, jadi termasuk organik." },
  { q: "Baterai bekas sebaiknya dibuang ke mana?", o: ["Tempat sampah organik", "Tempat khusus sampah B3", "Dibakar"], a: 1, e: "Baterai mengandung logam berbahaya. Kumpulkan terpisah dan serahkan ke titik pengumpulan B3." },
  { q: "Dalam prinsip 3R, langkah mana yang paling utama?", o: ["Recycle", "Reuse", "Reduce"], a: 2, e: "Reduce atau mengurangi adalah yang terbaik, karena sampah tidak sempat tercipta." },
  { q: "Apa yang sebaiknya dilakukan pada botol plastik sebelum didaur ulang?", o: ["Dibilas dan dikeringkan", "Dibakar", "Dicampur sisa makanan"], a: 0, e: "Botol yang bersih lebih mudah diterima dan diproses." },
  { q: "Bahan apa yang dibutuhkan untuk membuat kompos?", o: ["Plastik dan kaca", "Sisa dapur dan daun kering", "Kaleng dan kertas"], a: 1, e: "Kompos dibuat dari campuran bahan hijau (sisa dapur) dan bahan cokelat (daun kering)." },
  { q: "Contoh Reuse yang tepat adalah...", o: ["Membuang botol ke sungai", "Memakai toples bekas sebagai tempat bumbu", "Membakar plastik"], a: 1, e: "Reuse berarti memakai kembali barang tanpa mengolahnya lagi." },
  { q: "Mengapa membakar sampah plastik berbahaya?", o: ["Menghasilkan asap beracun", "Membuat tanah subur", "Tidak ada bahayanya"], a: 0, e: "Pembakaran plastik melepaskan zat beracun yang berbahaya bagi pernapasan dan lingkungan." },
  { q: "Sisa nasi dan sayur sebaiknya dimasukkan ke wadah...", o: ["B3", "Anorganik", "Organik"], a: 2, e: "Sisa makanan adalah sampah organik yang bisa dijadikan kompos." }
];

export const challenges = [
  { id: 1, text: "Bawa botol minum sendiri" },
  { id: 2, text: "Pisahkan sampah organik dan anorganik" },
  { id: 3, text: "Tolak sedotan atau kantong plastik sekali pakai" },
  { id: 4, text: "Habiskan makananmu, tanpa sisa" },
  { id: 5, text: "Ajak satu orang untuk ikut memilah" }
];

export const events = [
  { id: 1, date: "2026-11-14", title: "Bersih-bersih Pantai", place: "Pantai terdekat (online + lokasi)", desc: "Kumpulkan sampah bersama relawan, lalu pilah di lokasi." },
  { id: 2, date: "2026-11-21", title: "Workshop Kompos Rumahan", place: "Zoom", desc: "Belajar membuat kompos dari sisa dapur dalam 1 jam." },
  { id: 3, date: "2026-12-05", title: "Tukar Barang Bekas", place: "Balai warga", desc: "Bawa barang yang masih layak, tukar dengan barang lain." }
];


export const seedPosts = [
  { id: 1, name: "Dina", time: "2026-10-25T09:00:00", text: "Ada yang tahu cara menghilangkan bau di komposter? Punyaku mulai bau setelah seminggu.", comments: [{ name: "Raka", text: "Tambah daun kering atau serbuk kayu, lalu aduk. Biasanya bau hilang." }] },
  { id: 2, name: "Bima", time: "2026-10-27T16:30:00", text: "Hari ketiga bawa tas belanja sendiri. Ternyata gampang kalau ditaruh di dekat pintu!", comments: [] }
];

export const catStyle = {
  "Tips": "bg-sky-100 text-sky-700",
  "Kompos": "bg-emerald-100 text-emerald-700",
  "Daur ulang": "bg-amber-100 text-amber-700",
  "Gaya hidup": "bg-violet-100 text-violet-700"
};

export const articles = [
  { slug: "5-cara-mengurangi-sampah-dapur", title: "5 cara mengurangi sampah dapur tanpa ribet", cat: "Tips", date: "2026-10-20", read: 4,
    excerpt: "Dapur adalah sumber sampah terbesar di banyak rumah. Mulai dari kebiasaan kecil ini.",
    body: ["Sampah dapur sebagian besar berasal dari sisa makanan dan kemasan. Kabar baiknya, kamu bisa menguranginya tanpa mengubah hidup secara drastis.",
      "Pertama, rencanakan menu mingguan dan belanja sesuai daftar. Ini mengurangi bahan makanan yang terbuang karena tidak terpakai. Kedua, simpan bahan dengan benar: sayur di tempat tertutup, buah matang terpisah dari yang belum matang.",
      "Ketiga, olah sisa. Batang sayur bisa jadi kaldu, nasi sisa bisa jadi nasi goreng. Keempat, bawa wadah dan tas sendiri saat belanja. Kelima, pisahkan sisa yang tidak bisa dimakan (kulit, ampas) ke wadah khusus untuk dikomposkan.",
      "Mulai dari satu kebiasaan dulu. Setelah terbiasa, tambah satu lagi. Perubahan kecil yang konsisten lebih bertahan lama daripada perubahan besar yang cepat ditinggalkan."] },
  { slug: "panduan-kompos-pemula", title: "Panduan kompos untuk pemula", cat: "Kompos", date: "2026-10-15", read: 5,
    excerpt: "Tidak perlu lahan luas. Ember bekas pun cukup untuk memulai.",
    body: ["Kompos adalah hasil penguraian sampah organik oleh mikroorganisme. Hasilnya berupa bahan seperti tanah yang menyuburkan tanaman.",
      "Siapkan wadah berlubang (ember atau komposter). Isi dengan dua jenis bahan: bahan hijau seperti sisa sayur, kulit buah, dan ampas kopi, serta bahan cokelat seperti daun kering, kertas sobek, dan serbuk kayu. Perbandingan yang mudah diingat: kira-kira satu bagian hijau berbanding dua bagian cokelat.",
      "Jaga kelembapan seperti spons yang diperas, dan aduk seminggu sekali agar ada udara. Hindari daging, tulang, produk susu, dan minyak karena menarik hama dan berbau.",
      "Jika bau menyengat, tambahkan bahan cokelat dan aduk. Jika terlalu kering, percikkan sedikit air. Kompos biasanya siap dalam 4 sampai 8 minggu, ditandai warna gelap dan bau seperti tanah."] },
  { slug: "plastik-yang-bisa-didaur-ulang", title: "Plastik apa saja yang bisa didaur ulang?", cat: "Daur ulang", date: "2026-10-10", read: 4,
    excerpt: "Cek kode segitiga di dasar kemasan sebelum membuangnya.",
    body: ["Di dasar banyak kemasan plastik ada simbol segitiga dengan angka 1 sampai 7. Angka ini menunjukkan jenis resin plastiknya.",
      "Jenis yang paling umum diterima pengepul adalah nomor 1 (PET, seperti botol air mineral) dan nomor 2 (HDPE, seperti botol sampo dan galon). Nomor 5 (PP, seperti gelas dan tutup botol) juga semakin banyak diterima. Kebijakan tiap daerah berbeda, jadi tanyakan ke bank sampah terdekat.",
      "Apa pun jenisnya, bilas dan keringkan sebelum disetor. Lepas label dan tutup jika diminta. Pisahkan botol bening dari berwarna karena harganya bisa berbeda.",
      "Ingat, daur ulang adalah langkah ketiga. Mengurangi dan memakai ulang tetap lebih baik bagi lingkungan."] },
  { slug: "sampah-b3-di-rumah", title: "Sampah B3 di rumah: apa saja dan bagaimana menanganinya", cat: "Tips", date: "2026-10-05", read: 3,
    excerpt: "Baterai, lampu, dan obat kedaluwarsa tidak boleh bercampur dengan sampah biasa.",
    body: ["B3 adalah singkatan dari bahan berbahaya dan beracun. Di rumah, contohnya baterai, lampu neon, obat kedaluwarsa, pestisida, cat, dan perangkat elektronik rusak.",
      "Simpan sampah B3 di wadah tertutup yang terpisah, jauh dari jangkauan anak. Jangan dibakar, jangan dibuang ke saluran air, dan jangan dicampur dengan sampah organik.",
      "Cari titik pengumpulan khusus di kotamu, misalnya di kantor dinas lingkungan hidup, pusat perbelanjaan, atau kegiatan pengumpulan e-waste. Gunakan halaman Titik Pengumpulan untuk mulai mencari."] },
  { slug: "zero-waste-untuk-pemula", title: "Zero waste untuk pemula: mulai dari mana?", cat: "Gaya hidup", date: "2026-09-28", read: 5,
    excerpt: "Zero waste bukan soal sempurna. Ini soal mulai dan konsisten.",
    body: ["Banyak orang mengira zero waste berarti tidak menghasilkan sampah sama sekali. Padahal intinya adalah mengurangi sampah semampu kita, sedikit demi sedikit.",
      "Mulai dari audit kecil: catat sampah apa yang paling banyak kamu buang selama tiga hari. Kamu akan melihat polanya. Biasanya botol minum, kantong plastik, dan kemasan makanan.",
      "Lalu ganti satu per satu: botol minum isi ulang, tas belanja kain, kotak makan, dan sedotan reusable. Pakai barang yang sudah ada sebelum membeli yang baru, karena barang ramah lingkungan yang tidak terpakai tetap jadi sampah.",
      "Rayakan kemajuan, bukan kesempurnaan. Ajak keluarga atau teman agar lebih menyenangkan."] },
  { slug: "kreasi-botol-bekas", title: "5 kreasi dari botol plastik bekas", cat: "Daur ulang", date: "2026-09-20", read: 3,
    excerpt: "Dari pot tanaman sampai tempat pensil, botol bekas bisa punya hidup kedua.",
    body: ["Sebelum dibuang, coba lihat lagi botol plastik bekasmu. Dengan sedikit kreativitas, botol bisa jadi barang berguna.",
      "Pot tanaman: potong botol, lubangi dasarnya untuk drainase, isi tanah. Tempat pensil: potong bagian atas dan hias dengan kertas bekas. Penyiram tanaman: lubangi tutupnya. Celengan: buat celah di badan botol. Ecobrick: padatkan plastik bersih dan kering sampai keras.",
      "Gunakan gunting atau cutter dengan hati-hati, dan dampingi anak saat membuatnya."] }
];

export const points = [
  { id: 1, name: "Bank Sampah Hijau Sanur", city: "Denpasar", address: "Jl. Contoh No. 12", hours: "Sen-Sab 08.00-16.00", types: ["Plastik", "Kertas", "Logam", "Kaca"] },
  { id: 2, name: "Pusat Daur Ulang Renon", city: "Denpasar", address: "Jl. Contoh Raya No. 5", hours: "Sen-Jum 09.00-15.00", types: ["Plastik", "Elektronik", "B3"] },
  { id: 3, name: "Bank Sampah Kemang Asri", city: "Jakarta", address: "Jl. Contoh Selatan No. 20", hours: "Sen-Sab 08.00-17.00", types: ["Plastik", "Kertas", "Logam"] },
  { id: 4, name: "Titik Kumpul E-waste Sudirman", city: "Jakarta", address: "Jl. Contoh Pusat No. 8", hours: "Sen-Jum 10.00-18.00", types: ["Elektronik", "B3"] },
  { id: 5, name: "Bank Sampah Dago Peduli", city: "Bandung", address: "Jl. Contoh Utara No. 3", hours: "Sen-Sab 08.00-16.00", types: ["Plastik", "Kertas", "Kaca", "Organik"] },
  { id: 6, name: "Rumah Kompos Lembang", city: "Bandung", address: "Jl. Contoh Hijau No. 17", hours: "Sel-Min 08.00-14.00", types: ["Organik"] },
  { id: 7, name: "Bank Sampah Gubeng Bersih", city: "Surabaya", address: "Jl. Contoh Timur No. 9", hours: "Sen-Sab 07.00-15.00", types: ["Plastik", "Kertas", "Logam"] },
  { id: 8, name: "Pusat B3 Rungkut", city: "Surabaya", address: "Jl. Contoh Industri No. 1", hours: "Sen-Jum 09.00-15.00", types: ["B3", "Elektronik"] },
  { id: 9, name: "Bank Sampah Malioboro Lestari", city: "Yogyakarta", address: "Jl. Contoh Kota No. 14", hours: "Sen-Sab 08.00-16.00", types: ["Plastik", "Kertas", "Kaca"] },
  { id: 10, name: "Rumah Kompos Kaliurang", city: "Yogyakarta", address: "Jl. Contoh Lereng No. 6", hours: "Sel-Min 08.00-14.00", types: ["Organik", "Kertas"] }
];

export const faqs = [
  { q: "Apakah Sampadia gratis?", a: "Ya. Semua materi, quiz, challenge, dan forum bisa diakses tanpa biaya dan tanpa daftar akun." },
  { q: "Di mana data quiz dan challenge saya disimpan?", a: "Di perangkatmu sendiri (localStorage browser). Data tidak dikirim ke server, jadi akan hilang jika kamu menghapus data browser atau berganti perangkat." },
  { q: "Bagaimana cara memulai kalau saya benar-benar pemula?", a: "Buka halaman Belajar dan baca topik Jenis sampah, lalu coba quiz. Setelah itu ikuti challenge harian di Komunitas." },
  { q: "Apakah angka di Kalkulator Sampah akurat?", a: "Itu perkiraan berdasarkan berat rata-rata tiap barang. Gunakan sebagai gambaran kebiasaan, bukan angka resmi." },
  { q: "Bagaimana cara mencari tempat menyetor sampah?", a: "Buka halaman Titik Pengumpulan, pilih kota dan jenis sampah. Data di situ masih contoh, jadi konfirmasi ke lokasi sebelum datang." },
  { q: "Saya ingin bekerja sama atau jadi relawan. Ke mana?", a: "Kirim pesan lewat halaman Kontak dengan topik Kerja sama, dan ceritakan singkat idemu." }
];



