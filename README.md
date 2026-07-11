# Panduan Upload Website AAA Solusi ke GitHub Pages (Statis)

Folder ini berisi versi **statis (HTML/CSS/JS)** dari website **AAA Solusi CCTV** yang telah dioptimalkan agar bisa berjalan 100% tanpa memerlukan server backend Node.js. Versi ini sangat cocok untuk di-host secara gratis di **GitHub Pages**!

## Rincian File yang Ada di Folder Ini:
1. `index.html` : Struktur halaman utama, navigasi, katalog, ulasan, kontak, dan struktur chatbot & keranjang belanja.
2. `app.js` : Engine utama untuk menyaring katalog produk, mengoperasikan keranjang belanja, mengirim pesanan ke WhatsApp/Email, menyimpan testimoni ke `localStorage`, serta menjalankan Chatbot AI yang pintar secara offline dengan efek mengetik.
3. `style.css` : File pengaturan animasi transisi, scrollbar, efek mengetik, dan style pelengkap.
4. `images/` : Berisi file gambar banner utama (`cctv_banner_1783766794226.jpg`) dan gambar showroom (`cctv_showroom_1783766807768.jpg`) asli.

---

## Langkah 1: Unduh File Website
Unduh seluruh file yang berada di dalam folder `github-export/` ini ke komputer Anda. Pastikan strukturnya tetap seperti ini:
```text
nama-folder-anda/
├── index.html
├── app.js
├── style.css
├── README.md
└── images/
    ├── cctv_banner_1783766794226.jpg
    └── cctv_showroom_1783766807768.jpg
```

---

## Langkah 2: Buat Repositori Baru di GitHub
1. Masuk ke akun [GitHub](https://github.com/) Anda.
2. Di pojok kanan atas, klik tombol **`+`** lalu pilih **New repository**.
3. Isi kolom **Repository name** (contoh: `aaa-solusi` atau `cctv-tangerang`).
4. Pastikan pilihan visibilitas diatur ke **Public** (ini syarat wajib agar bisa menggunakan GitHub Pages gratis).
5. Jangan centang "Add a README file" karena kita sudah memilikinya.
6. Klik tombol hijau **Create repository**.

---

## Langkah 3: Unggah File ke GitHub
### Cara Mudah (Melalui Browser tanpa Git CLI):
1. Setelah repositori dibuat, cari tulisan "...or **uploading an existing file**" pada bagian atas halaman utama repositori Anda, lalu klik kata **uploading an existing file**.
2. Seret (drag and drop) seluruh file (`index.html`, `app.js`, `style.css`) dan **folder `images`** sekaligus ke dalam kotak yang disediakan.
3. Tunggu hingga semua file selesai di-upload.
4. Pada bagian bawah (Commit changes), klik tombol hijau **Commit changes**.

---

## Langkah 4: Aktifkan GitHub Pages (Website Anda Live!)
Setelah semua file berhasil diunggah ke GitHub, ikuti langkah ini untuk mengaktifkan domain gratis:
1. Di halaman repositori GitHub Anda, klik tab **Settings** (ikon roda gigi di barisan atas).
2. Di menu sebelah kiri, cari bagian **Code and automation** lalu pilih **Pages**.
3. Di bagian **Build and deployment**:
   - Di bawah pilihan **Source**, pastikan terpilih **Deploy from a branch**.
   - Di bawah pilihan **Branch**, ubah dari `None` menjadi **`main`** (atau `master`).
   - Folder di sebelahnya biarkan tetap `/ (root)`.
4. Klik tombol **Save** di sebelah kanan.
5. Tunggu sekitar 1 s.d. 2 menit, lalu segarkan (refresh) halaman Pages tersebut.
6. Anda akan melihat sebuah kotak pengumuman berwarna hijau di bagian atas dengan pesan:
   > **"Your site is live at `https://<username-anda>.github.io/<nama-repo-anda>/`"**
7. Klik tautan tersebut untuk membuka website AAA Solusi CCTV Anda yang sekarang sudah online dan siap digunakan oleh pelanggan!

---

## Kelebihan Versi Statis Ini:
- **Gratis Selamanya:** Tanpa biaya sewa server bulanan karena di-host langsung oleh GitHub.
- **Sangat Cepat:** Menggunakan Tailwind Play CDN & Google Fonts yang dimuat instan lewat browser pengunjung.
- **Keranjang Belanja Aktif:** Pelanggan bisa menambah produk ke keranjang, memasukkan data, dan melakukan checkout langsung ke WhatsApp Anda (+62 858-8809-8639) dengan format rincian belanja otomatis yang rapi!
- **Chatbot AI Luring:** Chatbot asisten virtual tetap bekerja secara dinamis merespon pertanyaan pelanggan tentang harga paket, alamat kantor, garansi, kelebihan Hilook, dll, menggunakan aturan pintar luring dengan efek animasi mengetik.
- **Testimoni & Verifikasi Langsung:** Di GitHub Pages (yang tidak memiliki backend server), setiap ulasan pelanggan baru yang ditulis akan langsung tersimpan secara aman di browser mereka (`localStorage`) dan ditampilkan dengan status "Menunggu Verifikasi". Untuk memastikan ulasan tersebut terkirim ke Anda (Admin), sistem kini dilengkapi dengan tombol verifikasi instan via **WhatsApp** atau **Email (mailto)**. Ketika pelanggan mengklik tombol tersebut, draf ulasan yang rapi akan langsung terkirim ke WhatsApp Anda (+62 858-8809-8639) atau ke email resmi Anda (aaasolusi@gmail.com) untuk Anda setujui!
