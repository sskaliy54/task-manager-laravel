<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;

class TaskController extends Controller
{
    public function index()
    {
        if (!auth()->user()->can('tasks.index')) {
            abort(403);
        }

        return Inertia::render('tasks/index', [
            'tasks' => Task::all(),
            'can' => [
                'create' => auth()->user()->can('tasks.create'),
                'edit' => auth()->user()->can('tasks.edit'),
                'delete' => auth()->user()->can('tasks.delete'),
            ],
        ]);
    }

    public function create()
    {
        if (!auth()->user()->can('tasks.create')) {
            abort(403);
        }

        return Inertia::render('tasks/create');
    }

    public function store(StoreTaskRequest $request)
    {
        if (!auth()->user()->can('tasks.create')) {
            abort(403);
        }

        Task::create([
            'title' => $request->title,
            'is_active' => $request->has('is_active') ? true : false,
        ]);

        return redirect()->route('tasks.index');
    }

    public function show(Task $task)
    {
        return redirect()->route('tasks.edit', $task);
    }

    public function edit(Task $task)
    {
        if (!auth()->user()->can('tasks.edit')) {
            abort(403);
        }

        return Inertia::render('tasks/edit', [
            'task' => $task,
        ]);
    }

    public function update(UpdateTaskRequest $request, Task $task)
    {
        if (!auth()->user()->can('tasks.edit')) {
            abort(403);
        }

        $task->update([
            'title' => $request->title,
            'is_active' => $request->has('is_active') ? true : false,
        ]);

        return redirect()->route('tasks.index');
    }

    public function destroy(Task $task)
    {
        if (!auth()->user()->can('tasks.delete')) {
            abort(403);
        }

        $task->delete();

        return redirect()->route('tasks.index');
    }
}