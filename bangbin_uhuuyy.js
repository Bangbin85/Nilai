// Kunci untuk menyimpan data di penyimpanan lokal browser
const STORAGE_KEY = 'dataRaporSD';

// Fungsi untuk membuat struktur HTML untuk pop-up notifikasi (modal)
const createModalStructure = () => {
    // Jangan buat modal baru jika sudah ada
    if (document.getElementById('appModal')) return;

    const modalHTML = `
        <div id="appModal" class="modal-backdrop" style="display: none;">
            <div class="modal-content">
                <h3 id="modalTitle">Notifikasi</h3>
                <p id="modalMessage">Ini adalah pesan modal.</p>
                <div class="modal-actions">
                    <button id="modalConfirm" class="modal-button">OK</button>
                    <button id="modalCancel" class="modal-button danger">Batal</button>
                </div>
            </div>
        </div>
    `;
    // Tambahkan HTML modal ke dalam body dokumen
    document.body.insertAdjacentHTML('beforeend', modalHTML);
};

// Fungsi untuk menampilkan pop-up notifikasi
const showModal = (title, message, showCancelButton = false) => {
    createModalStructure(); // Pastikan HTML modal ada

    const modal = document.getElementById('appModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const confirmButton = document.getElementById('modalConfirm');
    const cancelButton = document.getElementById('modalCancel');

    // Atur judul dan pesan
    modalTitle.textContent = title;
    modalMessage.innerHTML = message;

    // Tampilkan atau sembunyikan tombol "Batal"
    cancelButton.style.display = showCancelButton ? 'inline-block' : 'none';
    
    // Tampilkan modal
    modal.style.display = 'flex';

    // Kembalikan Promise yang akan resolve saat pengguna mengklik tombol
    return new Promise(resolve => {
        const onConfirm = () => {
            modal.style.display = 'none';
            resolve(true); // Pengguna mengklik OK
            removeListeners();
        };

        const onCancel = () => {
            modal.style.display = 'none';
            resolve(false); // Pengguna mengklik Batal
            removeListeners();
        };

        const removeListeners = () => {
            confirmButton.removeEventListener('click', onConfirm);
            cancelButton.removeEventListener('click', onCancel);
        };

        confirmButton.addEventListener('click', onConfirm);
        cancelButton.addEventListener('click', onCancel);
    });
};


const TP_DEFAULT_MASTER = {
    'kelas-1': {
        'mapel-2': [ // Pancasila
            { id: 'tp-k1-m2-1', deskripsi: 'Pengenalan Makna Bendera dan Lagu Kebangsaan.' },
            { id: 'tp-k1-m2-2', deskripsi: 'Aturan dan Norma dalam Keluarga.' },
			{ id: 'tp-k1-m2-3', deskripsi: 'Manfaat Hidup Tertib dan Taat Aturan.' },
			{ id: 'tp-k1-m2-4', deskripsi: 'Hak dan Kewajiban.' },
			{ id: 'tp-k1-m2-5', deskripsi: 'Pengenalan Identitas Diri.' },
			{ id: 'tp-k1-m2-6', deskripsi: 'Perbedaan sebagai Identitas Persatuan.' },
			{ id: 'tp-k1-m2-7', deskripsi: 'Karakteristik Lingkungan Tempat Tinggal dan Sekolah.' },
            { id: 'tp-k1-m2-8', deskripsi: 'Kepedulian dan Tanggung Jawab terhadap Lingkungan.' }
        ],
        'mapel-3': [ // Bahasa Indonesia
            { id: 'tp-k1-m3-1', deskripsi: 'Mengenali dan menyebutkan huruf abjad.' },
            { id: 'tp-k1-m3-2', deskripsi: 'Membaca suku kata dan kata sederhana.' },
			{ id: 'tp-k1-m3-3', deskripsi: 'Huruf Kapital dan Huruf Kecil.' },
			{ id: 'tp-k1-m3-4', deskripsi: 'Pengenalan Suku Kata.' },
			{ id: 'tp-k1-m3-5', deskripsi: 'Aktivitas Membaca Nyaring.' },
			{ id: 'tp-k1-m3-6', deskripsi: 'Aktivitas Mendengarkan dan Menanggapi Dongeng.' },
			{ id: 'tp-k1-m3-7', deskripsi: 'Penulisan Nama dan Kata Sederhana.' },
			{ id: 'tp-k1-m3-8', deskripsi: 'Aktivitas Berbicara di Depan Kelas.' },
			{ id: 'tp-k1-m3-9', deskripsi: 'Penjelasan Hubungan Sebab- dan Akibat.' },
            { id: 'tp-k1-m3-10', deskripsi: 'Menuliskan namanya sendiri.' }
        ],
        'mapel-4': [ // Matematika
            { id: 'tp-k1-m4-1', deskripsi: 'Membilang dan menuliskan lambang bilangan 1-20.' },
            { id: 'tp-k1-m4-2', deskripsi: 'Melakukan penjumlahan sederhana (hasil di bawah 20).' },
			{ id: 'tp-k1-m4-3', deskripsi: 'Pengenalan Pola.' },
			{ id: 'tp-k1-m4-4', deskripsi: 'Pengukuran Panjang.' },
			{ id: 'tp-k1-m4-5', deskripsi: 'Pengukuran Waktu.' },
			{ id: 'tp-k1-m4-6', deskripsi: 'Pengukuran Berat.' },
			{ id: 'tp-k1-m4-7', deskripsi: 'Penyajian Data dalam Bentuk Turus.' },
			{ id: 'tp-k1-m4-8', deskripsi: 'Dasar Pengolahan Data.' },
			{ id: 'tp-k1-m4-9', deskripsi: 'Penyajian Data dalam Bentuk Piktogram.' },
            { id: 'tp-k1-m4-10', deskripsi: 'Mengenal bentuk-bentuk geometri dasar (lingkaran, segitiga, persegi).' }
        ]
    },
    'kelas-2': {
        'mapel-2': [ // Pancasila
            { id: 'tp-k2-m2-1', deskripsi: 'Pengenalan Makna Bendera dan Lagu Kebangsaan.' },
            { id: 'tp-k2-m2-2', deskripsi: 'Aturan dan Norma dalam Keluarga.' },
			{ id: 'tp-k2-m2-3', deskripsi: 'Manfaat Hidup Tertib dan Taat Aturan.' },
			{ id: 'tp-k2-m2-4', deskripsi: 'Hak dan Kewajiban.' },
			{ id: 'tp-k2-m2-5', deskripsi: 'Pengenalan Identitas Diri.' },
			{ id: 'tp-k2-m2-6', deskripsi: 'Perbedaan sebagai Identitas Persatuan.' },
			{ id: 'tp-k2-m2-7', deskripsi: 'Karakteristik Lingkungan Tempat Tinggal dan Sekolah.' },
            { id: 'tp-k2-m2-8', deskripsi: 'Kepedulian dan Tanggung Jawab terhadap Lingkungan.' }
        ],
        'mapel-3': [ // Bahasa Indonesia
            { id: 'tp-k2-m3-1', deskripsi: 'Mengenali dan menyebutkan huruf abjad.' },
            { id: 'tp-k2-m3-2', deskripsi: 'Membaca suku kata dan kata sederhana.' },
			{ id: 'tp-k2-m3-3', deskripsi: 'Huruf Kapital dan Huruf Kecil.' },
			{ id: 'tp-k2-m3-4', deskripsi: 'Pengenalan Suku Kata.' },
			{ id: 'tp-k2-m3-5', deskripsi: 'Aktivitas Membaca Nyaring.' },
			{ id: 'tp-k2-m3-6', deskripsi: 'Aktivitas Mendengarkan dan Menanggapi Dongeng.' },
			{ id: 'tp-k2-m3-7', deskripsi: 'Penulisan Nama dan Kata Sederhana.' },
			{ id: 'tp-k2-m3-8', deskripsi: 'Aktivitas Berbicara di Depan Kelas.' },
			{ id: 'tp-k2-m3-9', deskripsi: 'Penjelasan Hubungan Sebab- dan Akibat.' },
            { id: 'tp-k2-m3-10', deskripsi: 'Menuliskan namanya sendiri.' }
        ],
        'mapel-4': [ // Matematika
            { id: 'tp-k2-m4-1', deskripsi: 'Membilang dan menuliskan lambang bilangan 1-20.' },
            { id: 'tp-k2-m4-2', deskripsi: 'Melakukan penjumlahan sederhana (hasil di bawah 20).' },
			{ id: 'tp-k2-m4-3', deskripsi: 'Pengenalan Pola.' },
			{ id: 'tp-k2-m4-4', deskripsi: 'Pengukuran Panjang.' },
			{ id: 'tp-k2-m4-5', deskripsi: 'Pengukuran Waktu.' },
			{ id: 'tp-k2-m4-6', deskripsi: 'Pengukuran Berat.' },
			{ id: 'tp-k2-m4-7', deskripsi: 'Penyajian Data dalam Bentuk Turus.' },
			{ id: 'tp-k2-m4-8', deskripsi: 'Dasar Pengolahan Data.' },
			{ id: 'tp-k2-m4-9', deskripsi: 'Penyajian Data dalam Bentuk Piktogram.' }
        ]
    },
    'kelas-3': {
        'mapel-2': [ // Pancasila
            { id: 'tp-k3-m2-1', deskripsi: 'Pengenalan Makna Bendera dan Lagu Kebangsaan.' },
            { id: 'tp-k3-m2-2', deskripsi: 'Aturan dan Norma dalam Keluarga.' },
			{ id: 'tp-k3-m2-3', deskripsi: 'Manfaat Hidup Tertib dan Taat Aturan.' },
			{ id: 'tp-k3-m2-4', deskripsi: 'Hak dan Kewajiban.' },
			{ id: 'tp-k3-m2-5', deskripsi: 'Pengenalan Identitas Diri.' },
			{ id: 'tp-k3-m2-6', deskripsi: 'Perbedaan sebagai Identitas Persatuan.' },
			{ id: 'tp-k3-m2-7', deskripsi: 'Karakteristik Lingkungan Tempat Tinggal dan Sekolah.' },
            { id: 'tp-k3-m2-8', deskripsi: 'Kepedulian dan Tanggung Jawab terhadap Lingkungan.' }
        ],
        'mapel-3': [ // Bahasa Indonesia
            { id: 'tp-k3-m3-1', deskripsi: 'Kalimat dengan Urutan SPOK.' },
            { id: 'tp-k3-m3-2', deskripsi: 'Kalimat Transitif dan Intransitif.' },
			{ id: 'tp-k3-m3-3', deskripsi: 'HKalimat Aktif dan Pasif.' },
			{ id: 'tp-k3-m3-4', deskripsi: 'Kalimat Langsung dan Tidak Langsung.' },
			{ id: 'tp-k3-m3-5', deskripsi: 'Tata Bahasa dan Struktur Kalimat.' },
			{ id: 'tp-k3-m3-6', deskripsi: 'Unsur Kalimat.' },
			{ id: 'tp-k3-m3-7', deskripsi: 'Tanda Baca dan Ejaan.' },
			{ id: 'tp-k3-m3-8', deskripsi: 'Morfologi dan Pembentukan Kata.' },
			{ id: 'tp-k3-m3-9', deskripsi: 'Gaya Bahasa dan Ekspresi.' },
            { id: 'tp-k3-m3-10', deskripsi: 'Paragraf dan Teks.' }
        ],
        'mapel-4': [ // Matematika
            { id: 'tp-k3-m4-1', deskripsi: 'Membilang dan menuliskan lambang bilangan 1-500.' },
            { id: 'tp-k3-m4-2', deskripsi: 'Melakukan penjumlahan sederhana (hasil di bawah 1000).' },
			{ id: 'tp-k3-m4-3', deskripsi: 'Pengenalan Pola.' },
			{ id: 'tp-k3-m4-4', deskripsi: 'Kelipatan dan Faktor.' },
			{ id: 'tp-k3-m4-5', deskripsi: 'Komposisi dan Dekomposisi Bangun Datar.' },
			{ id: 'tp-k3-m4-6', deskripsi: 'Pengurutan dan Pembandingan Data.' },
			{ id: 'tp-k3-m4-7', deskripsi: 'Penyajian Data dalam Bentuk Turus.' },
			{ id: 'tp-k3-m4-8', deskripsi: 'Dasar Pengolahan Data.' },
			{ id: 'tp-k3-m4-9', deskripsi: 'Penyajian Data dalam Bentuk Piktogram.' },
            { id: 'tp-k3-m4-10', deskripsi: 'Mengenal bentuk-bentuk geometri dasar (lingkaran, segitiga, persegi).' }
        ],
        'mapel-5': [ // IPAS
            { id: 'tp-k3-m5-1', deskripsi: 'Pancaindra dan Siklus Makhluk Hidup.' },
            { id: 'tp-k3-m5-2', deskripsi: 'Energi dan Perubahan Wujud Zat.' },
			{ id: 'tp-k3-m5-3', deskripsi: 'Gaya dan Gerak.' },
			{ id: 'tp-k3-m5-4', deskripsi: 'Masyarakat, Budaya, dan Kearifan Lokal Indonesia.' },
			{ id: 'tp-k3-m5-5', deskripsi: 'Uang.' },
			{ id: 'tp-k3-m5-6', deskripsi: 'Cuaca, Musim, dan Perubahan Iklim.' },
			{ id: 'tp-k3-m5-7', deskripsi: 'Geografi dan Bentang Alam.' }
        ],
        'mapel-8': [ // Inggris
            { id: 'tp-k3-m4-1', deskripsi: 'Vocabulary and Grammar (Counting with Numbers, Using Prepositions of Place, Using Can for Abilities, Using Adverbs of Frequency).' },
            { id: 'tp-k3-m4-2', deskripsi: 'Listening (Daily Activities, Time and Schedules, Directions and Locations, Reading Simple Texts, Writing about Time and Daily Activities).' },
			{ id: 'tp-k3-m4-3', deskripsi: 'Speaking (Talking about Time and Daily Activities, Talking About Objects, Talking About Public Places and Transportation).' }
        ]
    },
    'kelas-4': {
        'mapel-2': [ // Pancasila
            { id: 'tp-k4-m2-1', deskripsi: 'Pengenalan Makna Bendera dan Lagu Kebangsaan.' },
            { id: 'tp-k4-m2-2', deskripsi: 'Aturan dan Norma dalam Keluarga.' },
			{ id: 'tp-k4-m2-3', deskripsi: 'Manfaat Hidup Tertib dan Taat Aturan.' },
			{ id: 'tp-k4-m2-4', deskripsi: 'Hak dan Kewajiban.' },
			{ id: 'tp-k4-m2-5', deskripsi: 'Pengenalan Identitas Diri.' },
			{ id: 'tp-k4-m2-6', deskripsi: 'Perbedaan sebagai Identitas Persatuan.' },
			{ id: 'tp-k4-m2-7', deskripsi: 'Karakteristik Lingkungan Tempat Tinggal dan Sekolah.' },
            { id: 'tp-k4-m2-8', deskripsi: 'Kepedulian dan Tanggung Jawab terhadap Lingkungan.' }
        ],
        'mapel-3': [ // Bahasa Indonesia
            { id: 'tp-k4-m3-1', deskripsi: 'Menemukan ide pokok dalam sebuah paragraf.' },
            { id: 'tp-k4-m3-2', deskripsi: 'Menggunakan kalimat majemuk setara.' },
            { id: 'tp-k4-m3-3', deskripsi: 'Menulis surat pribadi sederhana.' }
        ],
        'mapel-4': [ // Matematika
            { id: 'tp-k4-m4-1', deskripsi: 'Menggunakan operasi perkalian dan pembagian.' },
            { id: 'tp-k4-m4-2', deskripsi: 'Memahami konsep pecahan senilai.' },
            { id: 'tp-k4-m4-3', deskripsi: 'Mengukur sudut menggunakan busur derajat.' }
        ],
        'mapel-5': [ // IPAS
            { id: 'tp-k4-m5-1', deskripsi: 'Pancaindra dan Siklus Makhluk Hidup.' },
            { id: 'tp-k4-m5-2', deskripsi: 'Energi dan Perubahan Wujud Zat.' },
			{ id: 'tp-k4-m5-3', deskripsi: 'Gaya dan Gerak.' },
			{ id: 'tp-k4-m5-4', deskripsi: 'Masyarakat, Budaya, dan Kearifan Lokal Indonesia.' },
			{ id: 'tp-k4-m5-5', deskripsi: 'Uang.' },
			{ id: 'tp-k4-m5-6', deskripsi: 'Cuaca, Musim, dan Perubahan Iklim.' },
			{ id: 'tp-k4-m5-7', deskripsi: 'Geografi dan Bentang Alam.' }
        ],
        'mapel-8': [ // Inggris
            { id: 'tp-k4-m4-1', deskripsi: 'Vocabulary and Grammar (Counting with Numbers, Using Prepositions of Place, Using Can for Abilities, Using Adverbs of Frequency).' },
            { id: 'tp-k4-m4-2', deskripsi: 'Listening (Daily Activities, Time and Schedules, Directions and Locations, Reading Simple Texts, Writing about Time and Daily Activities).' },
			{ id: 'tp-k4-m4-3', deskripsi: 'Speaking (Talking about Time and Daily Activities, Talking About Objects, Talking About Public Places and Transportation).' }
        ]
    },
    // PERBAIKAN: Tambahkan data TP untuk kelas 5 agar halaman nilai tidak error
    'kelas-5': {
        'mapel-2': [ // Pancasila
            { id: 'tp-k5-m2-1', deskripsi: 'Sejarah Pancasila.' },
			{ id: 'tp-k5-m2-2', deskripsi: 'Tokoh Perumus Pancasila.' },
			{ id: 'tp-k5-m2-3', deskripsi: 'Norma, Hak, dan Kewajiban.' },
			{ id: 'tp-k5-m2-4', deskripsi: 'Musyawarah dan Pengambilan Keputusan.' },
			{ id: 'tp-k5-m2-5', deskripsi: 'Bahasa sebagai Perekat Bangsa.' },
			{ id: 'tp-k5-m2-6', deskripsi: 'Keragaman Budaya Daerah.' },
			{ id: 'tp-k5-m2-7', deskripsi: 'Kota/Kabupaten dan Provinsi.' },
            { id: 'tp-k5-m2-8', deskripsi: 'Gotong Royong.' }
        ],
        'mapel-3': [ // Bahasa Indonesia
            { id: 'tp-k5-m3-1', deskripsi: 'Awalan, Akhiran, dan Imbuhan.' },
            { id: 'tp-k5-m3-2', deskripsi: 'Penggunaan Huruf Kapital.' },
			{ id: 'tp-k5-m3-3', deskripsi: 'Ejaan dan Bentuk Kata (katahubung, kata sifat, kata tanya).' },
			{ id: 'tp-k5-m3-4', deskripsi: 'Kalimat Perintah, Kalimat Majemuk, Kalimat langsung tidak langsung, Kalimat saran dan tanggapan.' },
			{ id: 'tp-k5-m3-5', deskripsi: 'Teknik Membaca Cepat (Skimming dan Scanning).' },
			{ id: 'tp-k5-m3-6', deskripsi: 'Perbedaan Opini dan Fakta.' },
			{ id: 'tp-k5-m3-7', deskripsi: 'Penulisan teks (eksplanasi, Eksposisi, Deskripsi).' },
            { id: 'tp-k5-m3-8', deskripsi: 'Penulisan Laporan Hasil Pengamatan.' }
        ],
        'mapel-4': [ // Matematika
            { id: 'tp-k5-m4-1', deskripsi: 'Bilangan Cacah Hingga 100.000.' },
			{ id: 'tp-k5-m4-2', deskripsi: 'Operasi Hitung Bilangan Cacah Hingga 100.000.' },
			{ id: 'tp-k5-m4-3', deskripsi: 'Bilangan Prima, KPK, dan FPB.' },
			{ id: 'tp-k5-m4-4', deskripsi: 'Bilangan Pecahan.' },
			{ id: 'tp-k5-m4-5', deskripsi: 'Operasi Aritmatika: Penjumlahan dan Pengurangan.' },
			{ id: 'tp-k5-m4-6', deskripsi: 'Operasi Aritmatika: Perkalian dan Pembagian.' },
			{ id: 'tp-k5-m4-7', deskripsi: 'Keliling dan Luas Bangun Datar.' },
            { id: 'tp-k5-m4-8', deskripsi: 'Pengurutan dan Pembandingan Data.' },
			{ id: 'tp-k5-m4-9', deskripsi: 'Penyajian Data dalam Bentuk Tabel dan Piktogram.' },
			{ id: 'tp-k5-m4-10', deskripsi: 'Peluang.' }
        ],
        'mapel-5': [ // IPAS
            { id: 'tp-k5-m5-1', deskripsi: 'Sistem Organ Tubuh dan Kesehatan.' },
			{ id: 'tp-k5-m5-2', deskripsi: 'Air, Ekosistem, dan Lingkungan.' },
			{ id: 'tp-k5-m5-3', deskripsi: 'Penghematan Energi dan Perubahan Iklim.' },
			{ id: 'tp-k5-m5-4', deskripsi: 'Letak dan Kondisi Geografis Indonesia.' },
			{ id: 'tp-k5-m5-5', deskripsi: 'Pengaruh Letak Geografis Indonesia pada Masyarakat.' },
			{ id: 'tp-k5-m5-6', deskripsi: 'Keragaman Budaya Nasional.' },
			{ id: 'tp-k5-m5-7', deskripsi: 'Produksi, Konsumsi, dan Distribusi.' }
        ],
        'mapel-8': [ // Inggris
            { id: 'tp-k5-m8-1', deskripsi: 'Vocabulary and Grammar (Food, Drinks, Price, and Shopping, Describing Quantity, Date and Months).' },
			{ id: 'tp-k5-m8-2', deskripsi: 'Listening (Conversation about Family and School, Conversation about Food, Drinks, and Health).' },
			{ id: 'tp-k5-m8-3', deskripsi: 'Reading (Reading Descriptive Texts, Reading Informational Texts, Reading Stories).' },
			{ id: 'tp-k5-m8-4', deskripsi: 'Writing (Writing Simple Sentences, Writing Short Descriptive Texts, Making Posters).' },
			{ id: 'tp-k5-m8-5', deskripsi: 'Speaking (Introducing Myself and Others, Asking and Giving Information , Asking for Permission).' }
        ],
        'mapel-9': [ // PLBJ
            { id: 'tp-k5-m9-1', deskripsi: 'Menyanyikan lagu Sirih Kuning.' },
			{ id: 'tp-k5-m9-2', deskripsi: 'Memahami Gambang Kromong.' },
			{ id: 'tp-k5-m9-3', deskripsi: 'Monas.' },
			{ id: 'tp-k5-m9-4', deskripsi: 'Bir Pletok.' },
			{ id: 'tp-k5-m9-5', deskripsi: 'Tugu Jakarta.' },
			{ id: 'tp-k5-m9-6', deskripsi: 'Permainan Betawi (Bentengan, Tak Kadal Lobang).' },
			{ id: 'tp-k5-m9-7', deskripsi: 'Maen Pukul.' },
			{ id: 'tp-k5-m9-8', deskripsi: 'Transportasi Umum.' }
        ],
        'mapel-10': [ // KKA
            { id: 'tp-k5-m10-1', deskripsi: 'Menerapkan pemecahan masalah dalam kehidupan sehari-hari.' },
			{ id: 'tp-k5-m10-2', deskripsi: 'Memahami konsep berpikir Komputasional.' },
			{ id: 'tp-k5-m10-3', deskripsi: 'Menuliskan urutan Instruksi Secara Logis.' },
			{ id: 'tp-k5-m10-4', deskripsi: 'Memahami Konsep Dasar Teknologi Digital.' },
			{ id: 'tp-k5-m10-5', deskripsi: 'Memahami Perangkat Keras dan Perangkat Lunak Komputer.' },
			{ id: 'tp-k5-m10-6', deskripsi: 'Memahami Konsep Dasar Kecerdasan Artifisial.' },
			{ id: 'tp-k5-m10-7', deskripsi: 'Memahami Perbedaan Komputer dan Manusia dalam Penginderaan.' },
			{ id: 'tp-k5-m10-8', deskripsi: 'Memahami Mesin Cerdas vs Mesin Non Cerdas.' },
			{ id: 'tp-k5-m10-9', deskripsi: 'Memahami Manfaat Kecerdasan Artifisial dalam Kehidupan Sehari-hari.' },
			{ id: 'tp-k5-m10-10', deskripsi: 'Menerapkan Konsep Klasifikasi dalam Kehidupan Sehari-hari.' }
        ]
    },
    'kelas-6': {
        'mapel-2': [ // Pancasila
            { id: 'tp-k6-m2-1', deskripsi: 'Sejarah Pancasila.' },
			{ id: 'tp-k6-m2-2', deskripsi: 'Tokoh Perumus Pancasila.' },
			{ id: 'tp-k6-m2-3', deskripsi: 'Norma, Hak, dan Kewajiban.' },
			{ id: 'tp-k6-m2-4', deskripsi: 'Musyawarah dan Pengambilan Keputusan.' },
			{ id: 'tp-k6-m2-5', deskripsi: 'Bahasa sebagai Perekat Bangsa.' },
			{ id: 'tp-k6-m2-6', deskripsi: 'Keragaman Budaya Daerah.' },
			{ id: 'tp-k6-m2-7', deskripsi: 'Kota/Kabupaten dan Provinsi.' },
            { id: 'tp-k6-m2-8', deskripsi: 'Gotong Royong.' }
        ],
        'mapel-3': [ // Bahasa Indonesia
            { id: 'tp-k6-m3-1', deskripsi: 'Awalan, Akhiran, dan Imbuhan.' },
            { id: 'tp-k6-m3-2', deskripsi: 'Penggunaan Huruf Kapital.' },
			{ id: 'tp-k6-m3-3', deskripsi: 'Ejaan dan Bentuk Kata (katahubung, kata sifat, kata tanya).' },
			{ id: 'tp-k6-m3-4', deskripsi: 'Kalimat Perintah, Kalimat Majemuk, Kalimat langsung tidak langsung, Kalimat saran dan tanggapan.' },
			{ id: 'tp-k6-m3-5', deskripsi: 'Teknik Membaca Cepat (Skimming dan Scanning).' },
			{ id: 'tp-k6-m3-6', deskripsi: 'Perbedaan Opini dan Fakta.' },
			{ id: 'tp-k6-m3-7', deskripsi: 'Penulisan teks (eksplanasi, Eksposisi, Deskripsi).' },
            { id: 'tp-k6-m3-8', deskripsi: 'Penulisan Laporan Hasil Pengamatan.' }
        ],
        'mapel-4': [ // Matematika
            { id: 'tp-k6-m4-1', deskripsi: 'Bilangan Cacah Hingga 100.000.' },
			{ id: 'tp-k6-m4-2', deskripsi: 'Operasi Hitung Bilangan Cacah Hingga 100.000.' },
			{ id: 'tp-k6-m4-3', deskripsi: 'Bilangan Prima, KPK, dan FPB.' },
			{ id: 'tp-k6-m4-4', deskripsi: 'Bilangan Pecahan.' },
			{ id: 'tp-k6-m4-5', deskripsi: 'Operasi Aritmatika: Penjumlahan dan Pengurangan.' },
			{ id: 'tp-k6-m4-6', deskripsi: 'Operasi Aritmatika: Perkalian dan Pembagian.' },
			{ id: 'tp-k6-m4-7', deskripsi: 'Keliling dan Luas Bangun Datar.' },
            { id: 'tp-k6-m4-8', deskripsi: 'Pengurutan dan Pembandingan Data.' },
			{ id: 'tp-k6-m4-9', deskripsi: 'Penyajian Data dalam Bentuk Tabel dan Piktogram.' },
			{ id: 'tp-k6-m4-10', deskripsi: 'Peluang.' }
        ],
        'mapel-5': [ // IPAS
            { id: 'tp-k6-m5-1', deskripsi: 'Sistem Organ Tubuh dan Kesehatan.' },
			{ id: 'tp-k6-m5-2', deskripsi: 'Air, Ekosistem, dan Lingkungan.' },
			{ id: 'tp-k6-m5-3', deskripsi: 'Penghematan Energi dan Perubahan Iklim.' },
			{ id: 'tp-k6-m5-4', deskripsi: 'Letak dan Kondisi Geografis Indonesia.' },
			{ id: 'tp-k6-m5-5', deskripsi: 'Pengaruh Letak Geografis Indonesia pada Masyarakat.' },
			{ id: 'tp-k6-m5-6', deskripsi: 'Keragaman Budaya Nasional.' },
			{ id: 'tp-k6-m5-7', deskripsi: 'Produksi, Konsumsi, dan Distribusi.' }
        ],
        'mapel-8': [ // Inggris
            { id: 'tp-k6-m8-1', deskripsi: 'Vocabulary and Grammar (Food, Drinks, Price, and Shopping, Describing Quantity, Date and Months).' },
			{ id: 'tp-k6-m8-2', deskripsi: 'Listening (Conversation about Family and School, Conversation about Food, Drinks, and Health).' },
			{ id: 'tp-k6-m8-3', deskripsi: 'Reading (Reading Descriptive Texts, Reading Informational Texts, Reading Stories).' },
			{ id: 'tp-k6-m8-4', deskripsi: 'Writing (Writing Simple Sentences, Writing Short Descriptive Texts, Making Posters).' },
			{ id: 'tp-k6-m8-5', deskripsi: 'Speaking (Introducing Myself and Others, Asking and Giving Information , Asking for Permission).' }
        ]
    }
};


const DEFAULT_PREDIKAT = [
    { dari: 90, sampai: 100, predikat: 'Sangat Baik' },
    { dari: 71, sampai: 89, predikat: 'Baik' },
    { dari: 61, sampai: 70, predikat: 'Cukup' },
    { dari: 0, sampai: 60, predikat: 'Perlu Peningkatan' }
];
const getPredikatForNilai = (mapelId, nilai, dataRapor) => {
    if (typeof nilai !== 'number' || isNaN(nilai)) return '';
    const rentangPredikat = (dataRapor.predikat && dataRapor.predikat[mapelId]) ? dataRapor.predikat[mapelId] : DEFAULT_PREDIKAT;
    for (const rentang of rentangPredikat) {
        if (nilai >= rentang.dari && nilai <= rentang.sampai) { return rentang.predikat; }
    }
    return '';
};

// Fungsi untuk menyediakan data default jika tidak ada data yang tersimpan
const getDefaultData = () => ({
    'infoDasar': {
        'namaSekolah': 'SDN Lubang Buaya 01',
        'logoSekolah': '',
        'npsn': '123456',
        'jenjang': 'Sekolah Dasar',
        'alamat': 'Jl. Yusufiyah No. 50, Lubang Buaya',
        'desaKelurahan': 'Lubang Buaya',
        'kecamatan': 'Cipayung',
        'kabupatenKota': 'Jakarta Timur',
        'provinsi': 'DKI Jakarta',
        'website': 'www.bangbin.id',
        'email': 'bangbin@edu.jakarta.go.id',
        'telpon': '',
        'kepalaSekolah': 'Rizki Arlini, M.Pd',
        'nipKepsek': '196508171990031005',
        'namaGuru': 'Bintang A. Permana',
        'nipGuru': '081310051985',
        'whatsappGuru': '',
        'kelas': 'V A',
        'fase': 'C',
        'semester': '1',
        'tahunAjaran': '2025/2026',
        'tanggalRaporDepan': '',
        'tanggalRaporNilai': '',
        'kelasAktif': 'kelas-5'
    },
    'dataSiswa': [
        { 'id': 'siswa-1', 'nama': 'Dhoy Edu', 'nis': '12345', 'nisn': '0051234567', 'kelamin': 'Laki-laki', 'agama': 'Islam', 'ttl': 'Jakarta, 01-01-2015' },
        { 'id': 'siswa-2', 'nama': 'Rizal Mahardika', 'nis': '12346', 'nisn': '0051234568', 'kelamin': 'Laki-laki', 'agama': 'Islam', 'ttl': 'Bandung, 02-02-2015' },
        { 'id': 'siswa-3', 'nama': 'Bintang Adhi Permana', 'nis': '12347', 'nisn': '0051234569', 'kelamin': 'Laki-laki', 'agama': 'Protestan', 'ttl': 'Surabaya, 03-03-2015' },
        { 'id': 'siswa-4', 'nama': 'Ronal Stefanus Siregar', 'nis': '12348', 'nisn': '0051234570', 'kelamin': 'Laki-laki', 'agama': 'Katholik', 'ttl': 'Medan, 04-04-2015' },
        { 'id': 'siswa-5', 'nama': 'I Wayan Yogi', 'nis': '12349', 'nisn': '0051234571', 'kelamin': 'Laki-laki', 'agama': 'Hindu', 'ttl': 'Denpasar, 05-05-2015' },
        { 'id': 'siswa-6', 'nama': 'Edi Brata', 'nis': '12351', 'nisn': '0051234572', 'kelamin': 'Laki-laki', 'agama': 'Budha', 'ttl': 'Semarang, 06-06-2015' },
        { 'id': 'siswa-7', 'nama': 'Yoga Adi Pratama', 'nis': '12352', 'nisn': '0051234573', 'kelamin': 'Laki-laki', 'agama': 'Konghucu', 'ttl': 'Bogor, 06-06-2015' },
        { 'id': 'siswa-8', 'nama': 'Didik Rahmadi', 'nis': '12353', 'nisn': '0051234574', 'kelamin': 'Perempuan', 'agama': 'Budha', 'ttl': 'Pandeglang, 06-06-2015' },
        { 'id': 'siswa-9', 'nama': 'Muslim Mackbook', 'nis': '12354', 'nisn': '0051234575', 'kelamin': 'Laki-laki', 'agama': 'Konghucu', 'ttl': 'Fakfak, 07-07-2015' },
        { 'id': 'siswa-10', 'nama': 'Ika Nirmala', 'nis': '12355', 'nisn': '0051234576', 'kelamin': 'Laki-laki', 'agama': 'Protestan', 'ttl': 'Nabire, 06-06-2015' }
    ],
    // ... dan sisa data default lainnya

    mataPelajaran: [
        { id: 'mapel-agama-1', nama: 'Pendidikan Agama Islam dan Budi Pekerti', singkat: 'PAI', agama: 'Islam' },
		{ id: 'mapel-agama-2', nama: 'Pendidikan Agama Protestan dan Budi Pekerti', singkat: 'PAP', agama: 'Protestan' },
		{ id: 'mapel-agama-3', nama: 'Pendidikan Agama Katholik dan Budi Pekerti', singkat: 'PAK', agama: 'Katholik' },
		{ id: 'mapel-agama-4', nama: 'Pendidikan Agama Hindu dan Budi Pekerti', singkat: 'PAH', agama: 'Hindu' },
		{ id: 'mapel-agama-5', nama: 'Pendidikan Agama Budha dan Budi Pekerti', singkat: 'PAB', agama: 'Budha' },
		{ id: 'mapel-agama-6', nama: 'Pendidikan Agama Konghucu dan Budi Pekerti', singkat: 'PKong', agama: 'Konghucu' },
        { id: 'mapel-2', nama: 'Pendidikan Pancasila', singkat: 'PP', agama: null },
        { id: 'mapel-3', nama: 'Bahasa Indonesia', singkat: 'BI', agama: null },
        { id: 'mapel-4', nama: 'Matematika', singkat: 'MTK', agama: null },
        { id: 'mapel-5', nama: 'Ilmu Pengetahuan Alam dan Sosial', singkat: 'IPAS', agama: null },
        { id: 'mapel-6', nama: 'Seni dan Budaya', singkat: 'SB', agama: null },
        { id: 'mapel-7', nama: 'Pendidikan Jasmani Olahraga dan Kesehatan', singkat: 'PJOK', agama: null },
        { id: 'mapel-8', nama: 'Bahasa Inggris', singkat: 'BIng', agama: null },
		{ id: 'mapel-9', nama: 'Pendidikan Lingkungan dan Budaya Jakarta', singkat: 'PLBJ', agama: null },
		{ id: 'mapel-10', nama: 'Koding dan Kecerdasan Artifisial', singkat: 'KKA', agama: null },
		{ id: 'mapel-11', nama: 'Mulok 3', singkat: 'M3', agama: null }
    ],

    ekstrakurikuler: [
        { id: 'eskul-1', nama: 'Pramuka' }, { id: 'eskul-2', nama: 'Seni Tari' }, { id: 'eskul-3', nama: 'Mancing' },
        { id: 'eskul-4', nama: 'Gaming' }, { id: 'eskul-5', nama: 'Touring' }, { id: 'eskul-6', nama: 'Turu' },
    ],
    kokurikuler: [
        { id: 'koku-1', nama: 'Senam Sehat' }, { id: 'koku-2', nama: 'Peduli Lingkungan' },
        { id: 'koku-3', nama: 'Rekayasa Teknologi' }
    ],
    dimensiKokurikuler: {
        iman: { nama: "Keimanan dan Ketakwaan terhadap Tuhan YME", tujuan: ["Menunjukkan keyakinan terhadap Tuhan YME", "Menghayati nilai-nilai akhlak mulia", "Menjaga hubungan harmonis", "Menghargai dan merawat lingkungan", "Mengembangkan sikap syukur dan sabar", "Menerapkan nilai-nilai keagamaan", "Berperilaku jujur, adil, dan bertanggung jawab"]},
        warga: { nama: "Kewargaan", tujuan: ["Menunjukkan rasa bangga terhadap identitas bangsa", "Menghargai keberagaman", "Menaati hukum dan norma", "Berpartisipasi menjaga persatuan", "Menerapkan prinsip hidup berkelanjutan", "Berkontribusi menjaga perdamaian", "Mengembangkan kesadaran hak dan kewajiban"]},
        kritis: { nama: "Penalaran Kritis", tujuan: ["Mengembangkan rasa ingin tahu", "Menerapkan berpikir logis dan analitis", "Menganalisis informasi secara kritis", "Membangun argumen yang logis", "Memanfaatkan literasi dan numerasi", "Mengevaluasi berbagai solusi", "Mengidentifikasi bias dan kesalahan logika"]},
        kreatif: { nama: "Kreativitas", tujuan: ["Menghasilkan gagasan orisinal", "Mengembangkan produk inovatif", "Menerapkan berpikir divergen", "Memadukan berbagai disiplin ilmu", "Mengekspresikan ide", "Beradaptasi dengan perubahan", "Menerima umpan balik"]},
        kolaborasi: { nama: "Kolaborasi", tujuan: ["Menunjukkan sikap peduli dan empati", "Bekerja sama dalam tim", "Berkomunikasi efektif dalam kelompok", "Membangun hubungan positif", "Berbagi sumber daya dan pengetahuan", "Menyelesaikan konflik secara konstruktif", "Berpartisipasi dalam kegiatan sosial"]},
        mandiri: { nama: "Kemandirian", tujuan: ["Bertanggung jawab atas tugas", "Mengambil inisiatif", "Beradaptasi dengan tantangan", "Mengelola waktu dan sumber daya", "Mengembangkan disiplin diri", "Meningkatkan problem-solving mandiri", "Membangun motivasi intrinsik"]},
        sehat: { nama: "Kesehatan", tujuan: ["Menerapkan pola hidup bersih dan sehat", "Memahami pentingnya kebugaran jasmani", "Mengenali tanda-tanda gangguan kesehatan", "Menjaga keseimbangan fisik dan mental", "Menghindari perilaku berisiko", "Berkontribusi menjaga kebersihan lingkungan", "Mengembangkan kebiasaan makan bergizi"]},
        komunikasi: { nama: "Komunikasi", tujuan: ["Menyimak dengan aktif", "Membaca secara kritis", "Berbicara dengan jelas dan santun", "Menulis dengan struktur yang baik", "Menggunakan media digital bertanggung jawab", "Menyesuaikan gaya komunikasi", "Menerapkan etika komunikasi"]}
    },

    'tujuanPembelajaran': {}, 
    'tujuanKokurikuler': {}, 
    'nilaiKokurikuler': {},
    'deskripsiKokurikuler': {},
    'predikat': {},
    'predikatKokurikuler': {},
    'pelengkap': { 'absensi': {}, 'catatanWaliKelas': {}, 'kesehatan': {}, 'prestasi': [], 'kokurikuler': {} }
});

// Fungsi untuk memuat data dari Local Storage
const loadData = () => {
    const dataString = localStorage.getItem(STORAGE_KEY);
    if (!dataString) {
        return getDefaultData();
    }
    try {
        const savedData = JSON.parse(dataString);
        const defaultData = getDefaultData();
        // Gabungkan data tersimpan dengan data default untuk memastikan semua properti ada
        return {
            ...defaultData,
            ...savedData,
            infoDasar: { ...defaultData.infoDasar, ...savedData.infoDasar },
            pelengkap: { ...defaultData.pelengkap, ...savedData.pelengkap }
        };
    } catch (error) {
        console.error('Error parsing data, returning default data.', error);
        return getDefaultData();
    }
};

// Fungsi untuk menyimpan data ke Local Storage
const saveData = (data) => {
    try {
        const dataString = JSON.stringify(data, null, 2); // Simpan dengan format rapi
        localStorage.setItem(STORAGE_KEY, dataString);
    } catch (error) {
        console.error('Gagal menyimpan data:', error);
        showModal('Error Penyimpanan', 'Gagal menyimpan data.');
    }
};

// Fungsi untuk backup (mengunduh) data sebagai file JSON
const backupData = () => {
    const dataToBackup = loadData();
    const dataString = JSON.stringify(dataToBackup, null, 2);
    const blob = new Blob([dataString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    const tahunAjaran = (dataToBackup.infoDasar.tahunAjaran || 'Tahun').replace(/[\/\\?%*:|"<>]/g, '-');
    const timestamp = new Date().toISOString().slice(0, 10);

    link.href = url;
    link.download = `backup_rapor_${tahunAjaran}_${timestamp}.json`;
    link.click();

    URL.revokeObjectURL(url);
    showModal('Backup Berhasil', 'Data Anda telah berhasil diunduh.');
};

// Fungsi untuk restore (mengunggah) data dari file JSON
const restoreData = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const isConfirmed = await showModal(
        'Konfirmasi Restore',
        'Yakin ingin me-restore data? <b>Semua data yang ada akan ditimpa.</b>',
        true
    );

    if (!isConfirmed) {
        event.target.value = ''; // Reset input file
        return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const data = JSON.parse(e.target.result);
            // Validasi sederhana: pastikan data memiliki properti 'infoDasar' dan 'dataSiswa'
            if (data && data.infoDasar && Array.isArray(data.dataSiswa)) {
                saveData(data);
                await showModal('Restore Berhasil', 'Data berhasil di-restore! Halaman akan dimuat ulang.');
                location.reload();
            } else {
                showModal('Error', 'Format file backup tidak valid!');
            }
        } catch (error) {
            showModal('Error Membaca File', 'Terjadi kesalahan: ' + error.message);
        } finally {
            event.target.value = ''; // Reset input file
        }
    };
    reader.readAsText(file);
};

// Fungsi untuk mereset semua data
const resetAllData = async () => {
    const isConfirmed = await showModal(
        'Konfirmasi Reset',
        'Anda akan menghapus <b>SEMUA</b> data. Pastikan Anda sudah backup.<br><br>Yakin?',
        true
    );

    if (isConfirmed) {
        localStorage.removeItem(STORAGE_KEY);
        await showModal('Reset Berhasil', 'Semua data telah dihapus. Aplikasi akan dimulai ulang.');
        location.reload();
    }
};


// Menambahkan event listener ke tombol-tombol global (backup, restore, reset)
const setupGlobalButtons = () => {
    const backupButton = document.getElementById('backupButton');
    if (backupButton) {
        backupButton.addEventListener('click', backupData);
    }

    const restoreInput = document.getElementById('restoreFile');
    if (restoreInput) {
        restoreInput.addEventListener('click', restoreData);
    }

    const resetButton = document.getElementById('resetButton');
    if (resetButton) {
        resetButton.addEventListener('click', resetAllData);
    }
};

// Menjalankan fungsi setupGlobalButtons setelah halaman selesai dimuat
document.addEventListener('DOMContentLoaded', setupGlobalButtons);
