<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Task::create(['title' => 'Configure authentication', 'is_active' => true]);
        Task::create(['title' => 'Set up permissions', 'is_active' => true]);
        Task::create(['title' => 'Design UI components', 'is_active' => false]);
        Task::create(['title' => 'Write documentation', 'is_active' => true]);
        Task::create(['title' => 'Deploy to production', 'is_active' => true]);
    }
}
