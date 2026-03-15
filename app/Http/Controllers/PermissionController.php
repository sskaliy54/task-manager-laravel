<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    public function index()
    {
        return Inertia::render('permissions/index', [
            'permissions' => Permission::all()
        ]);
    }

    public function show(string $id)
    {
        return redirect()->route('permissions.index');
    }

    public function create()
    {
    }
    public function store(Request $request)
    {
    }
    public function edit(string $id)
    {
    }
    public function update(Request $request, string $id)
    {
    }
    public function destroy(string $id)
    {
    }
}