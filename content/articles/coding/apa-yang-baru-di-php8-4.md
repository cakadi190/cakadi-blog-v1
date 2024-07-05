---
title: "PHP 8.4: Fitur Mendatang dan Informasi Rilis"
description: Artikel ini memberikan informasi dasar tentang rilis PHP 8.4 yang dijadwalkan pada November 2024, serta mengulas fitur-fitur utama seperti fungsi pencarian array baru, hook properti, dan akses anggota tanpa tanda kurung tambahan.
draft: false
image: /uploads/cover/php-cover.webp
category:
  - Coding
tags:
  - PHP
  - PHP 8.4
  - Fitur PHP 8.4
  - PHP Is Not Dead
author:
  name: "Cak Adi"
  avatar: null
  email: "cakadi190@gmail.com"
  description: "Seorang Fullstack Web Developer yang berbasis di Kabupaten Ngawi yang suka sekali dengan desain dan juga hal yang berbau teknologi."
created_at: 2024-06-09 10:30:00
updated_at: 2024-06-09 10:30:00
---

PHP merupakan bahasa pemrograman yang saat ini digandrungi oleh _developer_ web di Indonesia yang mana bahasa pemrograman ini sangatlah simpel dan ramah bagi pemula. Banyak yang beranggapan bahwa bahasa pemrograman satu ini yang biasa dijuluki "Si Gajah" _gak banget_ buat _developer expert_ yang mana katanya bahasa pemrograman ini jelek dan _gak enak_.

Namun siapa sangka 😱, bahasa pemrograman ini tetap bertahan di era gempuran bahasa pemrograman yang lebih bagus dan baik dari segi performa. Antara lain javascript, python, rust, golang dan lain sebagainya. Saat ini _developer_ (pengembang) dari bahasa pemrograman PHP ini sendiri akan menghadirkan pembaharuan versi PHP-nya yang mana akan menginjak di versi 8.4.0 yang nantinya akan dilepas-riliskan pada **21 November 2024** mendatang.

Penasaran _apa aja_ pembaharuan struktur kode yang akan datang? Langsung saja simak daftar di bawah ini.

## 1. Nyari Array Semakin Mudah

PHP 8.4 hadir dengan beberapa fungsi pencarian array baru yang bakal bikin ngoding makin asyik:

- **`array_find()`**: Cari elemen pertama yang memenuhi kondisi tertentu.
- **`array_find_key()`**: Cari kunci dari elemen pertama yang sesuai dengan kondisi yang kita mau.
- **`array_any()`**: Cek apakah ada elemen dalam array yang memenuhi kondisi tertentu.
- **`array_all()`**: Cek apakah semua elemen dalam array memenuhi kondisi tertentu.

## 2. Hook Properti PHP Untuk&nbsp;_Setter_&nbsp;dan&nbsp;_Getter_

PHP 8.4 juga mengenalkan hook properti yang terinspirasi dari bahasa seperti Kotlin, C#, dan Swift. Dengan hook ini, kita bisa bikin logika akses dan modifikasi properti langsung di dalam kelas.

Contoh:
::syntax

```php
class User implements Named
{
    private bool $isModified = false;

    public function __construct(
        private string $first,
        private string $last
    ) {}

    public string $fullName {
        get => $this->first . " " . $this->last;
        set {
            [$this->first, $this->last] = explode(' ', $value, 2);
            $this->isModified = true;
        }
    }
}
```

::

## 3. Akses Anggota Tanpa Tanda Kurung Tambahan

Satu lagi fitur yang nggak kalah keren di PHP 8.4 adalah akses anggota langsung setelah instansiasi tanpa perlu tanda kurung tambahan. Jadi, nggak ada lagi error parsing yang ngeselin. Namun perlu diingat, dalam fungsi yang masih _pake method static_ masih butuh _double colon_ (`:`) untuk instansiasi kelasnya.

Contoh:

**Sintaks Lama (PHP <= 8.3):**
::syntax
```php
$request = (new Request())->withMethod('GET')->withUri('/hello-world');
```
::
**Sintaks Baru (PHP 8.4):**
::syntax
```php
$request = new Request()->withMethod('GET')->withUri('/hello-world');
```
::

## 4. Dukungan Baru DOM HTML5
PHP 8.4 menambahkan kelas `\Dom\HTMLDocument` yang bisa menerjemahkan kode HTML5 dengan benar. Kelas `\DOMDocument` yang lama masih tersedia untuk kompatibilitas ke belakang.

::syntax
```php
$doc = \Dom\HTMLDocument::createFromString($contents);
```
::

## 5. Penggantian Sistem Deklarasi Tipe Data&nbsp;`null`
PHP memiliki perilaku aneh di mana variabel yang diketikkan dengan nilai default `null` akan menjadi null secara otomatis:

::syntax
```php
function foo(string $bar = null) { ... }

// Usang: Menandai parameter $bar secara implisit sebagai nullable sudah
// tidak digunakan lagi, tipe nullable eksplisit harus digunakan sebagai gantinya
```
::

Perilaku ini sekarang _udah gak dipake_ lagi dan akan dihapus di PHP 9. Solusinya adalah dengan membuat Book secara tersirat dapat di-`null`-kan:

::syntax
```php
function foo(?string $bar = null) { ... }
```
::

Itu dia beberapa fitur keren di PHP 8.4 yang bakal bikin coding jadi lebih menyenangkan. Tunggu apalagi? _Stay tuned_ buat update selanjutnya sampai PHP 8.4 resmi dirilis!
