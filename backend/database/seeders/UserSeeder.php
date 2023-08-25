<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        User::truncate();
        \DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $users = ['admin', 'beata', 'porta1'];

        function createRole($user)
        {
            if ($user == 'admin' || $user == 'beata') {
                return '1';
            } else {
                return '2';
            }
        }

        foreach ($users as &$user) {
            User::create([
                'name' => ucfirst($user),
                'email' => $user . '@erdert.com',
                'password' => Hash::make('password'),
                'role' => createRole($user),
            ]);
        }
    }
}
