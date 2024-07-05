---
title: Belajar Routing dan Controller Dasar Pada Laravel
description: Panduan lengkap untuk mempelajari routing dasar pada framework Laravel. Artikel ini membahas cara membuat route sederhana, route dengan parameter, route dengan controller, penggunaan middleware, dan route groups dengan bahasa yang kekinian.
draft: false
image: /uploads/cover/l10-cover.webp
category:
  - Coding
tags:
  - Laravel
  - PHP
  - Routing
author:
  name: "Cak Adi"
  avatar: null
  email: "cakadi190@gmail.com"
  description: "Seorang Fullstack Web Developer yang berbasis di Kabupaten Ngawi yang suka sekali dengan desain dan juga hal yang berbau teknologi."
created_at: 2024-06-01 19:30:22
updated_at: 2024-06-01 19:30:22
---

Laravel adalah salah satu framework PHP yang paling populer dan sering digunakan oleh para developer web. Salah satu fitur paling penting dalam Laravel adalah routing, yang memungkinkan kita untuk mengarahkan permintaan HTTP ke fungsi atau controller yang tepat. Mari kita bahas cara belajar routing dasar di Laravel dengan bahasa yang kekinian dan mudah dimengerti.

## Apa itu Routing?

Routing adalah proses menentukan bagaimana aplikasi web merespons permintaan dari URL tertentu. Dalam Laravel, routing sangat fleksibel dan mudah digunakan. Kita bisa mengatur route untuk berbagai jenis permintaan HTTP seperti GET, POST, PUT, dan DELETE.

## Membuat Route Sederhana

Pertama, mari kita buat route sederhana. Buka file `routes/web.php` dan tambahkan kode berikut:
::syntax

```php
Route::get('/hello', function () {
    return 'Hello, World!';
});
```

::
Route di atas akan menangani permintaan GET ke URL `/hello` dan mengembalikan teks 'Hello, World!'. Sangat sederhana, bukan?

## Route dengan Parameter

Laravel juga memungkinkan kita untuk membuat route dengan parameter dinamis. Misalnya, kita ingin membuat route yang menerima ID pengguna sebagai parameter:
::syntax

```php
Route::get('/user/{id}', function ($id) {
    return 'User ID: ' . $id;
});
```

::

Dengan route ini, jika kita mengunjungi URL `/user/1`, kita akan mendapatkan teks 'User ID: 1'. Parameter `{id}` akan otomatis diisi dengan nilai yang kita masukkan di URL.

## Route dengan Controller

Untuk aplikasi yang lebih kompleks, kita sebaiknya memisahkan logika aplikasi ke dalam controller. Mari kita buat route yang menggunakan controller. Pertama, kita buat controller dengan perintah Artisan:
::syntax

```bash
php artisan make:controller UserController
```

::

Setelah controller dibuat, kita bisa menambahkan metode di dalamnya. Misalnya, kita tambahkan metode `show`:
::syntax

```php
// app/Http/Controllers/UserController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show($id)
    {
        return 'User ID: ' . $id;
    }
}
```

::
Kemudian, kita daftarkan route yang menggunakan controller ini:
::syntax

```php
Route::get('/user/{id}', [UserController::class, 'show']);
```

::
Dengan menggunakan syntax array `[UserController::class, 'show']`, Laravel akan mengarahkan permintaan ke metode `show` di `UserController`.

## Menambahkan Middleware ke Route

Middleware adalah lapisan yang dapat digunakan untuk memeriksa atau memodifikasi permintaan HTTP yang masuk sebelum mencapai controller. Misalnya, kita bisa menambahkan middleware `auth` ke route:
::syntax

```php
Route::get('/dashboard', function () {
    return 'Welcome to your dashboard!';
})->middleware('auth');
```

::
Route ini akan mengecek apakah pengguna sudah login sebelum mengakses dashboard.

## Route Groups

Untuk menyederhanakan dan mengorganisir route, kita bisa menggunakan route groups. Misalnya, kita ingin menambahkan prefix ke beberapa route:
::syntax

```php
Route::prefix('admin')->group(function () {
    Route::get('/users', function () {
        // Halaman pengguna admin
    });

    Route::get('/settings', function () {
        // Halaman pengaturan admin
    });
});
```

::
Semua route di dalam group ini akan otomatis mendapatkan prefix `admin` di URL-nya, seperti `/admin/users` dan `/admin/settings`.

## Kesimpulan

Routing di Laravel sangatlah kuat dan fleksibel. Dengan memahami dasar-dasar routing, kita bisa membangun aplikasi web yang lebih terstruktur dan mudah di-maintain. Selamat belajar dan selamat mencoba berbagai macam konfigurasi routing di Laravel!
