<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // display all users 
    public function index() {
        return User::all();
    }
}
