<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Get authenticated user.
     */
    public function current(Request $request)
    {
        return response()->json($request->user());
    }

    public function getAllUser()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return response()->json("Sikeres törlés");
    }

    public function addUser(Request $request)
    {
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->role = $request->role;
        $user->password = Hash::make($request->password);

        $user->save();

        return response()->json("Sikeres felvétel");
    }

    public function updateUser(Request $request)
    {
        $user = User::find($request->id);
        $user->name = $request->name;
        $user->role = $request->role;
        $user->email = $request->email;

        $user->save();

        return response()->json("Sikeres módosítás");
    }
}
