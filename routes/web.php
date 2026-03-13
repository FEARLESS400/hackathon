<?php

use Illuminate\Support\Facades\Route;



// Route::fallback(function () {
//     return response('<p><strong>404 - Page non trouver</strong></p>');
// });


Route::get('/', function () {
    return view('welcome');
});

Route::get('/{page}', function ($page) {
    $urls = ['login', 'register', 'dashboard', 'users', 'addpost'];

    if (!in_array($page, $urls)) {
        abort(404);
    }

    return view('/welcome');
});