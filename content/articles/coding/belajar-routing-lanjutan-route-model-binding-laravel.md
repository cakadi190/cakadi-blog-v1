---
title: Belajar Routing Lanjutan, Route Model Binding Pada Laravel
description: Panduan lengkap tentang penggunaan Route Model Binding di Laravel. Artikel ini membahas cara menggunakan Route Model Binding untuk memuat model berdasarkan parameter route, baik dalam closure maupun controller, serta bagaimana menyesuaikan logika default dari Route Model Binding.
draft: false
image: /uploads/cover/l10-cover.webp
category:
  - Coding
tags:
  - Laravel
  - PHP
  - Routing
  - Route Model Binding
author:
  name: "Cak Adi"
  avatar: null
  email: 'cakadi190@gmail.com'
  description: 'Seorang Fullstack Web Developer yang berbasis di Kabupaten Ngawi yang suka sekali dengan desain dan juga hal yang berbau teknologi.'
created_at: 2024-06-01 19:30:22
updated_at: 2024-06-01 19:30:22
---

Laravel adalah framework PHP yang terkenal dengan fitur-fiturnya yang kaya dan kemudahan penggunaannya. Salah satu fitur lanjutan yang sangat berguna dalam pengembangan aplikasi adalah Route Model Binding. Fitur ini memungkinkan kita untuk otomatis memuat model berdasarkan parameter route, sehingga kita dapat mengurangi kode boilerplate dan membuat kode lebih bersih dan mudah dipahami. Mari kita bahas Route Model Binding di Laravel dengan bahasa yang kekinian dan mudah dimengerti.

## Apa itu Route Model Binding?

Route Model Binding adalah fitur di Laravel yang secara otomatis menyuntikkan model yang sesuai ke dalam route kita berdasarkan parameter route. Ini sangat berguna ketika kita sering membutuhkan instance model yang diambil dari database berdasarkan parameter URL.

## Cara Menggunakan Route Model Binding

Untuk menggunakan Route Model Binding, kita harus terlebih dahulu memiliki model dan route yang membutuhkan parameter model tersebut. Mari kita mulai dengan membuat model `Post`.

::syntax
```bash
php artisan make:model Post -m
```
::

Perintah di atas akan membuat model `Post` beserta file migrasinya. Selanjutnya, kita definisikan skema tabel untuk `Post` di file migrasi yang baru dibuat.

::syntax
```php
// database/migrations/xxxx_xx_xx_create_posts_table.php
public function up()
{
    Schema::create('posts', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->text('content');
        $table->timestamps();
    });
}
```
::

Jalankan migrasi untuk membuat tabel `posts` di database:

::syntax
```bash
php artisan migrate
```
::

Selanjutnya, kita tambahkan data dummy ke tabel `posts` menggunakan seeder atau Tinker.

## Mendefinisikan Route dengan Model Binding

Sekarang kita buat route yang menggunakan Route Model Binding. Buka file `routes/web.php` dan tambahkan kode berikut:

::syntax
```php
use App\Models\Post;

Route::get('/posts/{post}', function (Post $post) {
    return view('post.show', ['post' => $post]);
});
```
::

Pada route di atas, Laravel akan otomatis mencari `Post` berdasarkan parameter `{post}` dan menyuntikkan instance model `Post` yang sesuai ke dalam closure. Ini mengurangi kebutuhan untuk mengambil model secara manual di setiap route.

## Menggunakan Route Model Binding di Controller

Untuk aplikasi yang lebih terstruktur, kita sering menggunakan controller. Mari kita buat controller untuk `Post`.

::syntax
```bash
php artisan make:controller PostController
```
::

Tambahkan metode `show` di `PostController`:

::syntax
```php
// app/Http/Controllers/PostController.php
namespace App\Http\Controllers;

use App\Models\Post;

class PostController extends Controller
{
    public function show(Post $post)
    {
        return view('post.show', ['post' => $post]);
    }
}
```
::

Lalu, ubah route kita untuk menggunakan controller:

::syntax
```php
use App\Http\Controllers\PostController;

Route::get('/posts/{post}', [PostController::class, 'show']);
```
::

Dengan cara ini, kita tetap mendapatkan manfaat dari Route Model Binding saat menggunakan controller.

## Customizing Route Model Binding

Kadang kita perlu mengubah logika default dari Route Model Binding, misalnya menggunakan kolom lain selain `id` untuk pencarian model. Kita bisa menyesuaikan ini di metode `boot` dari `App\Providers\RouteServiceProvider`.

::syntax
```php
// app/Providers/RouteServiceProvider.php
use App\Models\Post;
use Illuminate\Support\Facades\Route;

public function boot()
{
    parent::boot();

    Route::model('post', Post::class, function ($value) {
        return Post::where('slug', $value)->firstOrFail();
    });
}
```
::

Dengan pengaturan di atas, Laravel akan mencari `Post` berdasarkan kolom `slug` bukan `id`.

## Kesimpulan

Route Model Binding adalah fitur powerful di Laravel yang membantu kita menulis kode lebih bersih dan terstruktur. Dengan memahami dan memanfaatkan fitur ini, kita dapat mengurangi banyak kode boilerplate dan membuat aplikasi lebih mudah di-maintain. Selamat mencoba dan semoga bermanfaat!

::syntax
```php
Route::get('/posts/{post}', function (Post $post) {
    return view('post.show', ['post' => $post]);
});
```
::