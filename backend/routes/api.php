<?php


use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\OAuthController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\KamionController;
use App\Http\Controllers\TeherautoController;
use App\Http\Controllers\SzemelygepkocsiController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\VagonController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', [LoginController::class, 'logout']);

    Route::get('user', [UserController::class, 'current']);

    Route::patch('settings/profile', [ProfileController::class, 'update']);
    Route::patch('settings/password', [PasswordController::class, 'update']);

    Route::post("kamionok", [KamionController::class, "store"]);
    Route::post("teherautok", [TeherautoController::class, "store"]);
    Route::post("szemelygepkocsik", [SzemelygepkocsiController::class, "store"]);
    Route::post("vagons", [VagonController::class, "store"]);
    Route::put("kamionok", [KamionController::class, "update"]);
    Route::put("teherautok", [TeherautoController::class, "update"]);
    Route::put("szemelyautok", [SzemelygepkocsiController::class, "update"]);
    Route::put("vagons", [VagonController::class, "update"]);
    Route::delete("kamionok/{id}", [KamionController::class, "destroy"]);
    Route::delete("teherauto/{id}", [TeherautoController::class, "destroy"]);
    Route::delete("szemelyauto/{id}", [SzemelygepkocsiController::class, "destroy"]);
    Route::delete("vagon/{id}", [VagonController::class, "destroy"]);
    Route::get("allKamionok", [KamionController::class, "index"]);
    Route::get("allTeherautok", [TeherautoController::class, "index"]);
    Route::get("allSzemelygepkocsik", [SzemelygepkocsiController::class, "index"]);
    Route::get("allVagons", [VagonController::class, "index"]);
    Route::get("excelExport", [ExportController::class, "getExcelExport"]);
    Route::get("getAllUser", [UserController::class, "getAllUser"]);
    Route::delete("deleteUser/{id}", [UserController::class, "destroy"]);
    Route::post("addUser", [UserController::class, "addUser"]);
    Route::put("updateUser", [UserController::class, "updateUser"]);
});

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', [LoginController::class, 'login']);
    Route::post('register', [RegisterController::class, 'register']);

    Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail']);
    Route::post('password/reset', [ResetPasswordController::class, 'reset']);

    Route::post('email/verify/{user}', [VerificationController::class, 'verify'])->name('verification.verify');
    Route::post('email/resend', [VerificationController::class, 'resend']);

    Route::post('oauth/{driver}', [OAuthController::class, 'redirect']);
    Route::get('oauth/{driver}/callback', [OAuthController::class, 'handleCallback'])->name('oauth.callback');
});
