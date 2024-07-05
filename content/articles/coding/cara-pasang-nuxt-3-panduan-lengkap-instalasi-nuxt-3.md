---
title: "Cara Pasang Nuxt 3: Panduan Lengkap Instalasi Nuxt 3"
description: Artikel ini memberikan panduan lengkap tentang cara memasang Nuxt 3, termasuk langkah-langkah instalasi dan konfigurasi awal untuk memulai proyek dengan Nuxt 3.
draft: false
image: /uploads/cover/nuxtjs.webp
category:
  - Coding
tags:
  - Vue.js
  - Nuxt.js
  - Instalasi
author:
  name: "Cak Adi"
  avatar: null
  email: 'cakadi190@gmail.com'
  description: 'Seorang Fullstack Web Developer yang berbasis di Kabupaten Ngawi yang suka sekali dengan desain dan juga hal yang berbau teknologi.'
created_at: 2024-06-07 15:05:01
updated_at: 2024-06-07 15:05:01
---

Nuxt 3 adalah framework berbasis Vue.js yang memudahkan pengembangan aplikasi web dengan fitur-fitur seperti server-side rendering (SSR), static site generation (SSG), dan routing otomatis. Artikel ini akan memberikan panduan langkah demi langkah untuk memasang Nuxt 3 dan memulai proyek baru.

## Prasyarat

Sebelum memulai, pastikan Anda sudah menginstall beberapa prasyarat berikut:

1. **Node.js**: Versi terbaru dari Node.js dapat diunduh dari [situs resmi Node.js](https://nodejs.org/).
2. **npm**: Node Package Manager (npm) biasanya sudah terpasang bersama Node.js.
3. **Terminal atau Command Prompt**: Untuk menjalankan perintah instalasi dan pengaturan proyek.

## Langkah-langkah Instalasi Nuxt 3

### 1. Membuat Proyek Baru

Langkah pertama adalah membuat proyek Nuxt 3 baru menggunakan `npx`, alat baris perintah yang datang bersama npm. Jalankan perintah berikut di terminal atau command prompt Anda:

::syntax
```bash
npx nuxi init nama-proyek-anda
```
::

Gantilah `nama-proyek-anda` dengan nama proyek yang Anda inginkan.

### 2. Masuk ke Direktori Proyek

Setelah proyek dibuat, masuk ke direktori proyek yang baru dengan perintah:

::syntax
```bash
cd nama-proyek-anda
```
::

### 3. Menginstall Dependensi

Selanjutnya, install semua dependensi yang diperlukan untuk proyek Nuxt 3 dengan menjalankan perintah berikut:

::syntax
```bash
npm install
```
::

### 4. Menjalankan Server Development

Setelah semua dependensi terpasang, Anda dapat menjalankan server development untuk melihat aplikasi Nuxt 3 Anda. Gunakan perintah berikut:

::syntax
```bash
npm run dev
```
::

### 5. Mengakses Aplikasi

Buka browser dan akses `http://localhost:3000` untuk melihat aplikasi Nuxt 3 yang baru saja Anda buat.

## Konfigurasi Awal Proyek Nuxt 3

Setelah berhasil memasang dan menjalankan proyek Nuxt 3, Anda mungkin ingin melakukan beberapa konfigurasi awal. File konfigurasi utama untuk Nuxt 3 adalah `nuxt.config.ts` atau `nuxt.config.js`. Di sini, Anda bisa mengatur berbagai pengaturan seperti head, plugins, modules, dan lain-lain.

Contoh konfigurasi sederhana di `nuxt.config.ts`:

::syntax
```typescript
export default defineNuxtConfig({
  // Global page headers
  head: {
    title: 'Nama Proyek Anda',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Deskripsi Proyek Anda' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  // Global CSS
  css: [
    // Tambahkan file CSS global atau modul CSS di sini
  ],
  // Plugins to run before rendering page
  plugins: [
    // Tambahkan plugin di sini
  ],
  // Auto import components
  components: true,
  // Modules for dev and build (recommended)
  buildModules: [
    // Tambahkan modul build di sini
  ],
  // Modules
  modules: [
    // Tambahkan modul di sini
  ],
  // Build Configuration
  build: {
    // Konfigurasi build
  }
})
```
::

## Kesimpulan

Dengan mengikuti panduan ini, Anda seharusnya dapat memasang Nuxt 3 dan memulai proyek baru dengan mudah. Nuxt 3 menyediakan berbagai fitur yang powerful dan ramah bagi pemula, sehingga sangat cocok untuk pengembangan aplikasi web modern. Selamat mencoba!
