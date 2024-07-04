---
title: "Apa Itu Middleware Pada Laravel 10 dan Apa Kegunaannya?"
description: Artikel ini akan memberikan kamu informasi apa itu middleware pada laravel
draft: true
image:
  - src: /uploads/cover/install-laravel-2.webp
category:
  - Coding
tags:
  - PHP
  - PHP 8.4
  - Laravel
  - Laravel Tutorial
author:
  name: "Cak Adi"
  avatar: null
  email: "cakadi190@gmail.com"
  description: "Seorang Fullstack Web Developer yang berbasis di Kabupaten Ngawi yang suka sekali dengan desain dan juga hal yang berbau teknologi."
created_at: 2024-07-04 12:16:31
updated_at: 2024-07-04 12:16:31
---

Laravel adalah salah satu framework PHP yang paling populer dan banyak digunakan oleh pengembang web karena kemudahannya dalam pengelolaan berbagai aspek aplikasi web, termasuk routing, sesi, autentikasi, dan lain-lain. Salah satu fitur penting dalam Laravel adalah middleware. Middleware bertindak sebagai lapisan yang memproses permintaan HTTP masuk sebelum mencapai controller, atau memproses respons HTTP sebelum dikirim ke klien. Dalam artikel ini, kita akan membahas apa itu middleware, bagaimana cara kerjanya, dan bagaimana mengimplementasikan middleware di Laravel.

## Apa Itu Middleware?

Middleware adalah sebuah sistem pada sebuah perangkat lunak (_software_) yang mana menangani dan memberikan pembatasan pada sebuah permintaan dari user. Middleware ini bisa digunakan untuk berbagai keperluan seperti autentikasi pengguna, logging, pengaturan CORS (Cross-Origin Resource Sharing), dan banyak lagi. Middleware ini ibaratnya seperti sebuah rantai yang mana pada middleware bisa digunakan dengan middleware lainnya secara beruntutan atau akan berhenti apabila sebuah kondisi pada suatu middleware terpenuhi.

Ibarat kata seperti kamu memiliki rumah yang megah nan mewah, namun ada orang lain yang ingin masuk ke dalam rumahmu, ntah itu tamu, maling atau keluargamu. Nah, middleware ini ibarat sebagai satpam pada rumahmu yang memberikan perlindungan dan keamanan dari ancaman tindak kriminal seperti pencuri, perampok, dan kejahatan lainnya. Bisa disimak ilustrasi dibawah ini supaya lebih paham.

![Gambaran Awal Middleware](/uploads/content/middleware-laravel/gambaran-awal-middleware.webp){class="w-100 border rounded-3"}

## Cara Kerja Middleware

Ketika aplikasi Laravel menerima permintaan HTTP, permintaan tersebut melewati serangkaian middleware sebelum mencapai controller. Setiap middleware dapat melakukan operasi tertentu pada permintaan tersebut. Misalnya, middleware autentikasi dapat memeriksa apakah pengguna telah masuk atau belum. Jika pengguna belum masuk, middleware dapat mengarahkan pengguna ke halaman login.

Sebaliknya, setelah controller memproses permintaan dan menghasilkan respons, respons tersebut melewati serangkaian middleware lain sebelum dikirim kembali ke klien. Middleware ini dapat digunakan untuk memodifikasi respons, seperti menambahkan header tertentu atau melakukan logging.

## Cara Menerapkan Fungsi Middleware

Berikut adalah langkah-langkah untuk mengimplementasikan middleware di Laravel:

1. **Membuat Middleware**
   Untuk membuat middleware baru, Kamu dapat menggunakan perintah artisan berikut:

   ::syntax

   ```bash
   php artisan make:middleware CheckAge
   ```
   ::
   Perintah ini akan membuat file middleware baru di `app/Http/Middleware/CheckAge.php`. Berikut adalah contoh sederhana middleware `CheckAge`:

   ::syntax

   ```php
   <?php

   namespace App\Http\Middleware;

   use Closure;

   class CheckAge
   {
       /**
        * Handle an incoming request.
        *
        * @param  \Illuminate\Http\Request  $request
        * @param  \Closure  $next
        * @return mixed
        */
       public function handle($request, Closure $next)
       {
           if ($request->age <= 200) {
               return redirect('home');
           }

           return $next($request);
       }
   }
   ```

   ::

2. **Mendaftarkan Middleware**
   Setelah middleware dibuat, Kamu perlu mendaftarkannya di file `app/Http/Kernel.php`. Ada dua cara untuk mendaftarkan middleware: global dan kelompok.

   - **Middleware Global**: Middleware global diterapkan pada semua permintaan HTTP yang masuk. Kamu dapat mendaftarkannya di properti `$middleware` dari class `Kernel`.

   - **Middleware Kelompok**: Middleware kelompok diterapkan pada kelompok rute tertentu. Kamu dapat mendaftarkannya di properti `$middlewareGroups` dari class `Kernel`.

   ::syntax

   ```php
   protected $routeMiddleware = [
       // Middleware lainnya
       'check.age' => \App\Http\Middleware\CheckAge::class,
   ];
   ```

   ::

3. **Menggunakan Middleware pada Rute**
   Setelah middleware didaftarkan, Kamu dapat menggunakannya pada rute atau kelompok rute tertentu. Berikut adalah contoh penggunaannya:

   ::syntax

   ```php
   Route::get('profile', function () {
       // ...
   })->middleware('check.age');
   ```
   ::
   Kamu juga dapat menggunakan middleware pada kelompok rute:

    ::syntax

    ```php
    Route::group(['middleware' => ['check.age']], function () {
        Route::get('/', function () {
            // ...
        });

        Route::get('user/profile', function () {
            // ...
        });
    });
    ```
    ::

## Penutup

Middleware adalah fitur yang sangat berguna di Laravel untuk mengelola permintaan dan respons HTTP. Dengan menggunakan middleware, Kamu dapat memisahkan logika aplikasi menjadi potongan-potongan kecil yang dapat digunakan kembali dan mudah dikelola. Dari autentikasi hingga logging, middleware memberikan cara yang fleksibel dan efektif untuk mengontrol aliran data dalam aplikasi Kamu.
