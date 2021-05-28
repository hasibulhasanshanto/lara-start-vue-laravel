<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontController extends Controller
{
    /**
     * Show Homepage
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function front()
    {
        return view('homepage');
    }
}