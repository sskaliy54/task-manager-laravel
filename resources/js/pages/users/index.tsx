import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem, User } from '@/types';
import users from '@/routes/users';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { edit, destroy } from '@/actions/App/Http/Controllers/UserController';
import { create } from '@/routes/users';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: users.index().url,
    },
];

export default function UserIndex({ users }: { users: User[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="p-6">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-[#0B0829] dark:text-white">
                            Users
                        </h1>
                        <span className="rounded-full bg-[#FF8400] px-3 py-0.5 text-sm font-medium text-white">
                            {users.length}
                        </span>
                    </div>
                    <Link
                        href={create().url}
                        className="rounded-full bg-[#FF8400] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#E67600]"
                    >
                        + Create User
                    </Link>
                </div>
                {/* Table Card */}
                <div className="overflow-hidden rounded-2xl border border-[#8FA0D8]/30 bg-white shadow-sm dark:border-[#8FA0D8]/20 dark:bg-[#0B0829]">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-b border-[#8FA0D8]/20 bg-[#8FA0D8]/10 dark:bg-[#8FA0D8]/5">
                                <TableHead className="py-4 pl-6 font-semibold text-[#0B0829] dark:text-[#8FA0D8]">
                                    Name
                                </TableHead>
                                <TableHead className="py-4 font-semibold text-[#0B0829] dark:text-[#8FA0D8]">
                                    Email
                                </TableHead>
                                <TableHead className="py-4 font-semibold text-[#0B0829] dark:text-[#8FA0D8]">
                                    Roles
                                </TableHead>
                                <TableHead className="py-4 pr-6 text-right font-semibold text-[#0B0829] dark:text-[#8FA0D8]">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow
                                    key={user.id}
                                    className="border-b border-[#8FA0D8]/10 transition hover:bg-[#8FA0D8]/5"
                                >
                                    <TableCell className="py-4 pl-6 font-medium text-[#0B0829] dark:text-white">
                                        {user.name}
                                    </TableCell>
                                    <TableCell className="py-4 text-[#6B7280] dark:text-[#8FA0D8]/70">
                                        {user.email}
                                    </TableCell>
                                    <TableCell className="py-4">
                                        {user.roles?.map((role) => (
                                            <span
                                                key={role.id}
                                                className="mr-1.5 inline-block rounded-full bg-[#8FA0D8]/20 px-3 py-1 text-xs font-medium text-[#0B0829] dark:bg-[#8FA0D8]/15 dark:text-[#8FA0D8]"
                                            >
                                                {role.name}
                                            </span>
                                        )) || (
                                            <span className="text-gray-400">
                                                —
                                            </span>
                                        )}
                                    </TableCell>
                                    <TableCell className="py-4 pr-6 text-right">
                                        <Link
                                            href={edit(user.id)}
                                            className="mr-2 rounded-full bg-[#8FA0D8] px-4 py-1.5 text-xs font-medium text-[#0B0829] transition hover:bg-[#7B8EC4]"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            href={destroy(user.id).url}
                                            method="delete"
                                            as="button"
                                            className="rounded-full bg-[#FF8400]/15 px-4 py-1.5 text-xs font-medium text-[#FF8400] transition hover:bg-[#FF8400]/25"
                                        >
                                            Delete
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AppLayout>
    );
}
