---
title: "Fitur Baru dan Pembaharuan di Laravel 11.10 Yang Menarik Buat Pengembang"
description: Artikel ini membahas fitur-fitur baru di Laravel 11.10, termasuk kemampuan untuk mengirim callback ke updateOrInsert, dukungan untuk model yang dihapus secara lembut dengan binding model rute eksplisit, dan lainnya.
draft: false
image: /uploads/cover/laravel-tutorial.webp
category:
  - Coding
tags:
  - Laravel
  - Laravel 11.10
  - Fitur Laravel
author:
  name: "Cak Adi"
  avatar: null
  email: "cakadi190@gmail.com"
  description: "Seorang Fullstack Web Developer yang berbasis di Kabupaten Ngawi yang suka sekali dengan desain dan juga hal yang berbau teknologi."
created_at: 2024-06-09 18:50:01
updated_at: 2024-06-09 18:50:01
---

::alert{type="info"}
Artikel ini dilansir dari [Use a Closure with updateOrInsert() in Laravel 11.10](https://laravel-news.com/laravel-11-10-0){:target="_blank"}  oleh Laravel News.
::

Halo, rek! Laravel 11.10 baru saja rilis dan membawa serangkaian fitur dan pembaruan yang pasti bikin kamu semangat. Bayangkan, sekarang kamu bisa lebih fleksibel dengan `updateOrInsert()`, dan ada dukungan keren untuk model yang dihapus dengan lembut saat menggunakan explicit route model binding.

Namun, gak cuman itu loh pembaharuannya. Penasaran apa aja pembaharuan dari Laravel 11.10? Yuk, kita cek apa saja yang baru di Laravel 11.10!

## Mengizinkan Melewatkan Callback ke `updateOrInsert()`

[Mark Eriksson](https://github.com/Markshall) berkontribusi dengan menambahkan kemampuan untuk melewatkan callback sebagai argumen kedua ke metode query builder `updateOrInsert()`. Di dalam callback, variabel boolean `$exists` dilewatkan sehingga Anda dapat menulis logika untuk memperbarui kolom spesifik berdasarkan apakah rekaman tersebut ada atau tidak:

::syntax
```php
DB::table('users')->updateOrInsert(
  ['user_id' => $user_id],
  function ($exists) use ($data) {
    if ($exists) {
      return [
        'name' => $data['name'],
        'email' => $data['email'],
      ];
    }

    return [
      'name' => $data['name'],
      'email' => $data['email'],
      'optional_column' => $data['foobar'],
    ];
  }
);
```
::

Lihat [Pull Request #51566](https://github.com/laravel/framework/pull/51566) untuk detail implementasi lengkap.

## Dukungan untuk Model yang Dihapus Secara Soft dengan Pemodelan Rute Eksplisit

[Graham Bradley](https://github.com/gbradley) menambahkan dukungan untuk model yang dihapus secara soft saat menggunakan pemodelan rute eksplisit:

> PR ini memungkinkan resolusi model yang dihapus secara soft saat menggunakan fitur pemodelan rute eksplisit Laravel. Ini memungkinkan pengembang untuk menggunakan pemodelan rute eksplisit tanpa harus menyesuaikan logika resolusi saat berurusan dengan model yang dihapus secara soft. Untuk melakukannya, digunakan metode `withTrashed()` yang sama seperti pemodelan implisit.

::syntax
```php
// Sebelumnya
Route::get('/users/{user}', ...);
Route::bind('user', function (string $value) {
    return User::where('id', $value)->withTrashed()->firstOrFail();
});

// Setelahnya
Route::get('/users/{user}', ...)->withTrashed();
Route::model('user', User::class);
```
::

Lihat [Pull Request #51651](https://github.com/laravel/framework/pull/51651) untuk detail implementasi lengkap.

## Mengizinkan Penetapan Kunci API Resend di Konfigurasi Mailer

[@riasvdv](https://github.com/riasvdv) berkontribusi dengan menambahkan penetapan kunci API [Resend](https://laravel-news.com/resend-laravel) langsung di konfigurasi mailer, bukan hanya di konfigurasi `services`. Lihat [Pull Request #51618](https://github.com/laravel/framework/pull/51618) untuk lebih detail.

## Catatan Rilis

Anda dapat melihat daftar lengkap fitur baru dan pembaruan di bawah ini dan perbedaan antara [11.9.0 dan 11.10.0](https://github.com/laravel/framework/compare/v11.9.0...v11.10.0) di GitHub. Catatan rilis berikut diambil langsung dari [changelog](https://github.com/laravel/framework/blob/e404bd90a97b2e9ed8a3d2ef53a4312658a4a49a/CHANGELOG.md#v11100---2024-06-04):

## v11.10.0

- [11.x] Memperbaiki typo pada nama file oleh [@Henridv](https://github.com/Henridv) dalam [#51643](https://github.com/laravel/framework/pull/51643)
- [11.x] Menambahkan auto refresh Vite ke halaman error oleh [@riasvdv](https://github.com/riasvdv) dalam [#51635](https://github.com/laravel/framework/pull/51635)
- [11.x] Menambahkan tes untuk `join_paths` oleh [@imanghafoori1](https://github.com/imanghafoori1) dalam [#51621](https://github.com/laravel/framework/pull/51621)
- [11.x] Memuat opsi dasar untuk file konfigurasi yang hilang oleh [@jasonmccreary](https://github.com/jasonmccreary) dalam [#51619](https://github.com/laravel/framework/pull/51619)
- [11.x] Menambahkan opsi untuk menonaktifkan penggabungan konfigurasi dasar oleh [@taka-oyama](https://github.com/taka-oyama) dalam [#51579](https://github.com/laravel/framework/pull/51579)
- [11.x] Mengizinkan callback untuk dilewatkan ke `updateOrInsert()` untuk melewatkan nilai `$values` yang berbeda jika rekaman sudah ada oleh [@Markshall](https://github.com/Markshall) dalam [#51566](https://github.com/laravel/framework/pull/51566)
- [11.x] Memperbaiki masalah `join_paths` dengan segmen '0' oleh [@imanghafoori1](https://github.com/imanghafoori1) dalam [#51649](https://github.com/laravel/framework/pull/51649)
- [11.x] Menghapus tanda kutip ganda ekstra di halaman error oleh [@nicolus](https://github.com/nicolus) dalam [#51670](https://github.com/laravel/framework/pull/51670)
- [11.x] Menambahkan tes untuk meningkatkan cakupan tes untuk `HtmlString` oleh [@saMahmoudzadeh](https://github.com/saMahmoudzadeh) dalam [#51666](https://github.com/laravel/framework/pull/51666)
- [11.x] Menambahkan tes untuk `Arr::whereNotNull` oleh [@saMahmoudzadeh](https://github.com/saMahmoudzadeh) dalam [#51661](https://github.com/laravel/framework/pull/51661)
- [11.x] Menambahkan tes untuk kelas `FileSystem` oleh [@imanghafoori1](https://github.com/imanghafoori1) dalam [#51654](https://github.com/laravel/framework/pull/51654)
- [11.x] Memperbarui `OptimizeClearCommand.php` oleh [@nathanpurcell](https://github.com/nathanpurcell) dalam [#51667](https://github.com/laravel/framework/pull/51667)
- [11.x] Mendukung model yang dihapus secara soft saat menggunakan pemodelan rute eksplisit oleh [@gbradley](https://github.com/gbradley) dalam [#51651](https://github.com/laravel/framework/pull/51651)
- [11.x] Menambahkan tes untuk `Arr::divide` oleh [@saMahmoudzadeh](https://github.com/saMahmoudzadeh) dalam [#51673](https://github.com/laravel/framework/pull/51673)
- [11.x] `Prune` harus menjadi opsi flag oleh [@riasvdv](https://github.com/riasvdv) dalam [#51694](https://github.com/laravel/framework/pull/51694)
- [11.x] Menghindari penggunaan halaman error baru Laravel jika `app.debug` berubah menjadi `true` saat runtime oleh [@crynobone](https://github.com/crynobone) dalam [#51705](https://github.com/laravel/framework/pull/51705)
