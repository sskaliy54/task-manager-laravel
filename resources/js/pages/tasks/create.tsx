import { Head, Link, Form } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import tasks from '@/routes/tasks';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Spinner } from '@/components/ui/spinner';
import TaskController from '@/actions/App/Http/Controllers/TaskController';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tasks',
        href: tasks.index().url,
    },
    {
        title: 'Create',
        href: tasks.create().url,
    },
];

export default function TaskCreate() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Task" />
            <div className="p-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="bg-gradient-to-r from-[#FF8400] to-[#E67600] bg-clip-text text-3xl font-bold text-transparent">
                        Create Task
                    </h1>
                    <p className="mt-2 text-base text-gray-500 dark:text-[#8FA0D8]/60">
                        Add a new task
                    </p>
                </div>

                {/* Form Card */}
                <div className="mx-auto max-w-lg rounded-2xl border border-[#8FA0D8]/40 bg-white p-8 shadow-lg shadow-[#8FA0D8]/15 dark:border-[#8FA0D8]/30 dark:bg-[#0B0829]/50 dark:shadow-xl dark:shadow-[#8FA0D8]/10">
                    <Form
                        {...TaskController.store.form()}
                        disableWhileProcessing
                        className="flex flex-col gap-6"
                    >
                        {({ processing, errors }) => (
                            <div className="grid gap-5">
                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="title"
                                        className="text-base text-[#0B0829] dark:text-[#8FA0D8]"
                                    >
                                        Title
                                    </Label>
                                    <Input
                                        id="title"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        name="title"
                                        placeholder="Task title"
                                        className="rounded-xl border-[#8FA0D8]/40 text-base focus:border-[#FF8400] focus:ring-[#FF8400] dark:border-[#8FA0D8]/30 dark:bg-[#0B0829] dark:text-white dark:placeholder-[#8FA0D8]/40"
                                    />
                                    <InputError
                                        message={errors.title}
                                        className="mt-1"
                                    />
                                </div>

                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="is_active"
                                        name="is_active"
                                        value="1"
                                        defaultChecked
                                        className="h-4 w-4 rounded border-[#8FA0D8]/40 text-[#FF8400] focus:ring-[#FF8400]"
                                    />
                                    <Label
                                        htmlFor="is_active"
                                        className="text-base text-[#0B0829] dark:text-[#8FA0D8]"
                                    >
                                        Active
                                    </Label>
                                </div>

                                <button
                                    type="submit"
                                    tabIndex={2}
                                    disabled={processing}
                                    className="mt-3 w-full rounded-full bg-[#FF8400] py-3.5 text-base font-semibold text-white shadow-lg shadow-[#FF8400]/25 transition hover:bg-[#E67600] hover:shadow-xl hover:shadow-[#FF8400]/30 disabled:opacity-50"
                                >
                                    {processing && (
                                        <Spinner className="mr-2 inline" />
                                    )}
                                    Create task
                                </button>

                                <Link
                                    href={tasks.index().url}
                                    className="text-center text-sm text-[#8FA0D8]/70 transition hover:text-[#FF8400]"
                                >
                                    ← Back to tasks
                                </Link>
                            </div>
                        )}
                    </Form>
                </div>
            </div>
        </AppLayout>
    );
}
