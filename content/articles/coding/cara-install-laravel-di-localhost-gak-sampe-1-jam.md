---
title: Cara Install Laravel di Localhost Gak Sampe 1 Jam
description: Panduan lengkap dan cepat untuk menginstall Laravel di localhost dalam waktu kurang dari 1 jam. Artikel ini memberikan langkah-langkah yang simpel dan mudah diikuti, cocok untuk pemula yang ingin mulai belajar Laravel.
draft: false
image: /uploads/cover/laravel-tutorial.webp
category:
  - Coding
tags:
  - Laravel
  - PHP
  - Web Development
author:
  name: "Cak Adi"
  avatar: null
  email: 'cakadi190@gmail.com'
  description: 'Seorang Fullstack Web Developer yang berbasis di Kabupaten Ngawi yang suka sekali dengan desain dan juga hal yang berbau teknologi.'
created_at: 2024-06-01 19:30:22
updated_at: 2024-06-01 19:30:22
---

Hai teman-teman! Kamu mau belajar Laravel tapi bingung gimana cara installnya? Tenang aja, kali ini aku bakal kasih tau langkah-langkah install Laravel di localhost yang simpel dan gak bakal makan waktu lebih dari 1 jam. Yuk, simak caranya!

## 1. Siapkan Lingkungan Pengembangan

Sebelum mulai, pastiin kamu udah punya beberapa tools wajib di laptop atau PC kamu. Berikut adalah daftar tools yang perlu kamu siapin:

- **Composer**: Ini adalah dependency manager untuk PHP.
- **XAMPP atau MAMP**: Software untuk membuat server lokal di komputer kamu.
- **Node.js**: Buat kelola npm package yang dibutuhkan Laravel.

Kalau belum punya, kamu bisa download dan install tools-tools tersebut dari situs resminya masing-masing.

## 2. Install Composer

Composer adalah alat yang paling penting untuk mengelola dependency di PHP. Buat install Composer, kamu bisa download dari [situs resmi Composer](https://getcomposer.org/).

Setelah download, jalankan installer dan ikuti instruksi yang diberikan. Untuk memastikan Composer sudah terinstall dengan benar, buka terminal atau command prompt, lalu ketik:

::syntax
```bash
composer -v
```
::

Kalau Composer sudah terinstall dengan baik, kamu akan melihat versi Composer yang terpasang.

## 3. Install Laravel

Sekarang kita masuk ke bagian utama, yaitu install Laravel. Pertama, buka terminal atau command prompt dan arahkan ke direktori tempat kamu ingin membuat project Laravel. Setelah itu, jalankan perintah berikut:

::syntax
```bash
composer create-project --prefer-dist laravel/laravel nama_project_kamu
```
::

Ganti `nama_project_kamu` dengan nama project yang kamu inginkan. Composer akan otomatis mendownload dan menginstall semua yang dibutuhkan untuk Laravel.

## 4. Konfigurasi Environment

Setelah instalasi selesai, masuk ke direktori project kamu:

::syntax
```bash
cd nama_project_kamu
```
::

Di dalam direktori ini, ada file `.env` yang berisi konfigurasi environment. Buka file ini dengan text editor favorit kamu dan sesuaikan pengaturan database. Contohnya seperti ini:

::syntax
```text
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database_kamu
DB_USERNAME=root
DB_PASSWORD=
```
::

Pastikan kamu sudah membuat database dengan nama yang sama di phpMyAdmin atau tools database lainnya.

## 5. Jalankan Laravel

Setelah semua konfigurasi selesai, saatnya menjalankan Laravel. Di terminal atau command prompt, pastikan kamu masih berada di direktori project Laravel kamu, lalu ketik:
::syntax
```bash
php artisan serve
```
::
Perintah ini akan menjalankan server development Laravel di localhost. Kamu bisa mengakses project kamu melalui browser di alamat:
::syntax
```plaintext
http://localhost:8000
```
::

Voila! Sekarang project Laravel kamu sudah berjalan di localhost.

## Penutup

Gimana, gampang kan? Dengan mengikuti langkah-langkah di atas, kamu bisa install Laravel di localhost gak sampe 1 jam. Selamat mencoba dan semoga sukses dengan project Laravel kamu!

Kalau ada pertanyaan atau butuh bantuan lebih lanjut, jangan ragu buat komen di bawah atau hubungi aku di sosial media. Happy coding! 🚀