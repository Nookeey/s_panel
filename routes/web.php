<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SkyShop\InvoiceController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Dashboard', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->middleware(['auth', 'verified']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // route for page
    // Route::get('/page', [PageController::class, 'index'])->name('page.index');
    // Route::get('/page/create', [PageController::class, 'create'])->name('page.create');
    // Route::post('/page', [PageController::class, 'store'])->name('page.store');
    // Route::get('/page/{page}', [PageController::class, 'show'])->name('page.show');
    // Route::get('/page/{page}/edit', [PageController::class, 'edit'])->name('page.edit');
    // Route::patch('/page/{page}', [PageController::class, 'update'])->name('page.update');
    // Route::delete('/page/{page}', [PageController::class, 'destroy'])->name('page.destroy');

    // route for invoice
    Route::get('/invoice', [InvoiceController::class, 'index'])->name('invoice.index');
    Route::get('/invoice/create', [InvoiceController::class, 'create'])->name('invoice.create');
    Route::post('/invoice', [InvoiceController::class, 'store'])->name('invoice.store');
    Route::get('/invoice/{invoice}', [InvoiceController::class, 'show'])->name('invoice.show');
    Route::get('/invoice/{invoice}/edit', [InvoiceController::class, 'edit'])->name('invoice.edit');
    Route::patch('/invoice/{invoice}', [InvoiceController::class, 'update'])->name('invoice.update');
    Route::delete('/invoice/{invoice}', [InvoiceController::class, 'destroy'])->name('invoice.destroy');
});

require __DIR__ . '/auth.php';
