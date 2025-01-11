    <?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use Laravel\Sanctum\Sanctum;
use Illuminate\Support\Facades\Hash;

// Fetch all products
Route::get('/products', [ProductController::class, 'index']); 

// Create a new product (with authentication middleware)
Route::middleware(['auth:api'])->post('/products', [ProductController::class, 'store']); 

Route::post('login', function (Request $request) {
    $user = User::where('email', $request->email)->first();

    if ($user && Hash::check($request->password, $user->password)) {
        return response()->json([
            'token' => $user->createToken('YourAppName')->plainTextToken
        ]);
    }

    return response()->json(['message' => 'Unauthorized'], 401);
});