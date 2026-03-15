import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem, Task } from '@/types';
import tasks from '@/routes/tasks';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { edit, destroy } from '@/actions/App/Http/Controllers/TaskController';
import { create } from '@/routes/tasks';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tasks',
        href: tasks.index().url,
    },
];

type Can = {
    create: boolean;
    edit: boolean;
    delete: boolean;
};

export default function TaskIndex({ tasks, can }: { tasks: Task[]; can: Can }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tasks" />
            <div className="p-6">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-[#0B0829] dark:text-white">
                            Tasks
                        </h1>
                        <span className="rounded-full bg-[#FF8400] px-3 py-0.5 text-sm font-medium text-white">
                            {tasks.length}
                        </span>
                    </div>
                    {can.create && (
                        <Link
                            href={create().url}
                            className="rounded-full bg-[#FF8400] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#E67600]"
                        >
                            + Create Task
                        </Link>
                    )}
                </div>

                {/* Table Card */}
                <div className="overflow-hidden rounded-2xl border border-[#8FA0D8]/30 bg-white shadow-lg shadow-[#8FA0D8]/15 dark:border-[#8FA0D8]/20 dark:bg-[#0B0829] dark:shadow-xl dark:shadow-[#8FA0D8]/10">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-b border-[#8FA0D8]/20 bg-[#8FA0D8]/10 dark:bg-[#8FA0D8]/5">
                                <TableHead className="py-4 pl-6 font-semibold text-[#0B0829] dark:text-[#8FA0D8]">
                                    Title
                                </TableHead>
                                <TableHead className="py-4 font-semibold text-[#0B0829] dark:text-[#8FA0D8]">
                                    Status
                                </TableHead>
                                {(can.edit || can.delete) && (
                                    <TableHead className="py-4 pr-6 text-right font-semibold text-[#0B0829] dark:text-[#8FA0D8]">
                                        Actions
                                    </TableHead>
                                )}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tasks.map((task) => (
                                <TableRow
                                    key={task.id}
                                    className="border-b border-[#8FA0D8]/10 transition hover:bg-[#8FA0D8]/5"
                                >
                                    <TableCell className="py-4 pl-6 font-medium text-[#0B0829] dark:text-white">
                                        {task.title}
                                    </TableCell>
                                    <TableCell className="py-4">
                                        <span
                                            className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                                                task.is_active
                                                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                    : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                            }`}
                                        >
                                            {task.is_active
                                                ? 'Active'
                                                : 'Inactive'}
                                        </span>
                                    </TableCell>
                                    {(can.edit || can.delete) && (
                                        <TableCell className="py-4 pr-6 text-right">
                                            {can.edit && (
                                                <Link
                                                    href={edit(task.id).url}
                                                    className="mr-2 rounded-full bg-[#8FA0D8] px-4 py-1.5 text-xs font-medium text-[#0B0829] transition hover:bg-[#7B8EC4]"
                                                >
                                                    Edit
                                                </Link>
                                            )}
                                            {can.delete && (
                                                <Link
                                                    href={destroy(task.id).url}
                                                    method="delete"
                                                    as="button"
                                                    className="rounded-full bg-[#FF8400]/15 px-4 py-1.5 text-xs font-medium text-[#FF8400] transition hover:bg-[#FF8400]/25"
                                                >
                                                    Delete
                                                </Link>
                                            )}
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AppLayout>
    );
}
