<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\FrontController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [FrontController::class, 'front'])->name('front.home');
// Route::get('/products', [FrontController::class, 'front']);
// Route::get('/about', [FrontController::class, 'front']);
// Route::get('/contact-us', [FrontController::class, 'front']);
Route::get('/{any}', [FrontController::class, 'front'])->where(' any', '.*');
// Route::get('/login', [LoginController::class, 'showLoginForm']);

Auth::routes();

Route::middleware(['auth'])->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    // Route::get('/home/profile', [HomeController::class, 'index']);
    // Route::get('/home/password', [HomeController::class, 'index']);
    Route::get('/{any}', [HomeController::class, 'index'])->where(' any', '.*');
});