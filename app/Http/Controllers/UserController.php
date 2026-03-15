<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use Inertia\Inertia;
use App\Models\User;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index()
    {
        if (!auth()->user()->can('users.index')) {
            abort(403);
        }

        return Inertia::render('users/index', [
            'users' => User::with('roles')->get()
        ]);
    }

    public function create()
    {
        if (!auth()->user()->can('users.index')) {
            abort(403);
        }

        return Inertia::render('users/create', [
            'roles' => Role::all()
        ]);
    }

    public function store(UserStoreRequest $request)
    {
        if (!auth()->user()->can('users.index')) {
            abort(403);
        }

        $user = User::create($request->validated());

        if ($request->role) {
            $user->assignRole($request->role);
        }

        return redirect()->route('users.index');
    }

    public function show(string $id)
    {
        return redirect()->route('users.edit', $id);
    }

    public function edit(string $id)
    {
        if (!auth()->user()->can('users.index')) {
            abort(403);
        }

        return Inertia::render('users/edit', [
            'user' => User::with('roles')->findOrFail($id),
            'roles' => Role::all()
        ]);
    }

    public function update(UserUpdateRequest $request, string $id)
    {
        if (!auth()->user()->can('users.index')) {
            abort(403);
        }

        $user = User::findOrFail($id);
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password ? bcrypt($request->password) : $user->password
        ]);

        if ($request->has('role')) {
            $user->syncRoles([$request->role]);
        }

        return redirect()->route('users.index');
    }

    public function destroy(string $id)
    {
        if (!auth()->user()->can('users.index')) {
            abort(403);
        }

        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->route('users.index');
    }
}