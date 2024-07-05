---
title: Cara Deploy Nuxt 3 di Vercel Hanya Dalam 30 Menit atau Bahkan Kurang
description: Panduan lengkap dan cepat untuk meng-deploy aplikasi Nuxt 3 di Vercel dalam waktu kurang dari 30 menit. Artikel ini membahas langkah-langkah dari pembuatan proyek, penyimpanan di GitHub, hingga proses deploy di Vercel dengan bahasa yang mudah dipahami.
draft: false
image: /uploads/cover/nuxtjs.webp
category:
  - Coding
tags:
  - Nuxt 3
  - Vercel
  - Deployment
author:
  name: "Cak Adi"
  avatar: null
  email: 'cakadi190@gmail.com'
  description: 'Seorang Fullstack Web Developer yang berbasis di Kabupaten Ngawi yang suka sekali dengan desain dan juga hal yang berbau teknologi.'
created_at: 2024-06-01 19:30:22
updated_at: 2024-06-01 19:30:22
---

Halo rek! Apakah kalian sudah pernah dengar tentang Nuxt 3? Ini adalah framework Vue.js yang sangat keren dan powerful. Nah, kali ini kita akan membahas cara deploy Nuxt 3 di Vercel dengan cepat dan mudah, bahkan bisa selesai dalam 30 menit atau kurang! Yuk, simak langkah-langkahnya!

### 1. Persiapan Awal

Sebelum mulai, pastikan kamu sudah punya beberapa hal berikut:

- **Akun GitHub**: Karena kita akan menggunakan GitHub untuk versi kontrol.
- **Akun Vercel**: Tempat kita akan deploy aplikasi Nuxt 3.

### 2. Membuat Proyek Nuxt 3

Pertama-tama, kita buat dulu proyek Nuxt 3. Buka terminal dan jalankan perintah berikut:

::syntax
```bash
npx nuxi init my-nuxt3-app
cd my-nuxt3-app
npm install
```
::

Ini akan membuat proyek baru dengan nama `my-nuxt3-app` dan menginstal semua dependensi yang diperlukan.

### 3. Menyimpan Proyek di GitHub

Selanjutnya, kita perlu menyimpan proyek ini di GitHub. Ikuti langkah-langkah ini:

1. **Inisialisasi Git** di folder proyek:
    ::syntax
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
    ::

2. **Buat repository baru** di GitHub dan ikuti instruksi untuk menambahkan repository remote ke proyek kamu:
    ::syntax
    ```bash
    git remote add origin https://github.com/username/my-nuxt3-app.git
    git branch -M main
    git push -u origin main
    ```
    ::

Gantilah `username` dengan nama pengguna GitHub kamu dan `my-nuxt3-app` dengan nama repository yang kamu buat.

### 4. Deploy ke Vercel

Sekarang, kita masuk ke tahap paling seru, yaitu deploy ke Vercel!

1. **Login ke Vercel** dan klik tombol **"New Project"**.
2. **Hubungkan GitHub** kamu jika belum, dan pilih repository `my-nuxt3-app`.
3. Vercel akan mendeteksi bahwa ini adalah proyek Nuxt. Klik **"Deploy"** dan tunggu proses build dan deploy selesai.

Voila! Proyek Nuxt 3 kamu sekarang sudah live di Vercel. Vercel juga menyediakan URL khusus untuk proyek kamu yang bisa langsung dibagikan.

### 5. Pengaturan Tambahan (Opsional)

Untuk performa yang lebih optimal dan beberapa fitur tambahan, kamu bisa mengatur beberapa hal di Vercel:

- **Environment Variables**: Tambahkan variabel lingkungan jika proyek kamu memerlukannya.
- **Custom Domain**: Jika kamu punya domain sendiri, kamu bisa menghubungkannya ke proyek ini.
- **Automatic Deployments**: Setiap kali kamu melakukan push ke GitHub, Vercel akan otomatis deploy versi terbaru proyek kamu.

### Kesimpulan

Deploy Nuxt 3 di Vercel benar-benar semudah itu. Dalam hitungan menit, kamu sudah bisa melihat aplikasi Vue.js kamu live di internet. Tidak ada lagi alasan untuk menunda-nunda deploy proyek keren kamu. Ayo, segera coba dan rasakan kemudahan serta kecepatan deploy dengan Vercel!

Selamat mencoba dan semoga sukses!

---

Dengan langkah-langkah di atas, kamu sekarang sudah bisa deploy Nuxt 3 di Vercel dengan cepat dan mudah. Semoga artikel ini bermanfaat dan jangan ragu untuk berbagi pengalaman kamu di kolom komentar!