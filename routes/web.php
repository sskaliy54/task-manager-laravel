<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Task;
use Spatie\Permission\Models\Role;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', function () {
        $user = auth()->user();
        return Inertia::render('dashboard', [
            'stats' => [
                'totalTasks' => Task::count(),
                'activeTasks' => Task::where('is_active', true)->count(),
                'totalUsers' => User::count(),
                'totalRoles' => Role::count(),
            ],
        ]);
    })->name('dashboard');

    Route::resource('users', App\Http\Controllers\UserController::class)->names('users');
    Route::resource('roles', App\Http\Controllers\RoleController::class)->names('roles');
    Route::resource('permissions', App\Http\Controllers\PermissionController::class)->names('permissions');
    Route::resource('tasks', App\Http\Controllers\TaskController::class)->names('tasks');
});

require __DIR__ . '/settings.php';