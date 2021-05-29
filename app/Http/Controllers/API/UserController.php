<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::latest()->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name'      => 'required|max:120',
            'email'     => 'required|unique:users,email|max:120',
            'bio'       => 'required',
            'type'      => 'required',
            'password'  => 'required:min:8',
        ]);

        $user = User::create([
            'name'      => $request['name'],
            'email'     => $request['email'],
            'bio'       => $request['bio'],
            'type'      => $request['type'],
            'status'    => $request['status'],
            'password'  => Hash::make($request['password']),
        ]);

        if ($user) {
            return response()->json([
                'succuss' => 'User Created Successfull!',
            ], 201);
        } else {
            return response()->json([
                'error' => 'User Creation Failed!',
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}