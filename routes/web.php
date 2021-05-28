<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\FrontController;


Route::get('/', [FrontController::class, 'front'])->name('front.home');
Route::get('/products', [FrontController::class, 'front']);
Route::get('/about', [FrontController::class, 'front']);
Route::get('/contact-us', [FrontController::class, 'front']);
// Route::get('/{any}', [FrontController::class, 'front'])->where(' any', '.*'); 

Auth::routes();
Route::middleware(['auth'])->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/profile', [HomeController::class, 'index']);
    Route::get('/password', [HomeController::class, 'index']);
});