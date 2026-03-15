<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Task;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Create permissions
        $permissions = [
            'tasks.index',
            'tasks.create',
            'tasks.edit',
            'tasks.delete',
            'users.index',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        // Admin - full CRUD tasks + read users
        $admin = Role::create(['name' => 'admin']);
        $admin->givePermissionTo(Permission::all());

        // Editor - full CRUD tasks only
        $editor = Role::create(['name' => 'editor']);
        $editor->givePermissionTo(['tasks.index', 'tasks.create', 'tasks.edit', 'tasks.delete']);

        // User - only view tasks
        $userRole = Role::create(['name' => 'user']);
        $userRole->givePermissionTo(['tasks.index']);

        // Create test users
        $adminUser = User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@test.com',
        ]);
        $adminUser->assignRole('admin');

        $editorUser = User::factory()->create([
            'name' => 'Editor',
            'email' => 'editor@test.com',
        ]);
        $editorUser->assignRole('editor');

        $normalUser = User::factory()->create([
            'name' => 'User',
            'email' => 'user@test.com',
        ]);
        $normalUser->assignRole('user');

        // Create sample tasks
        $this->call(TaskSeeder::class);

    }
}
