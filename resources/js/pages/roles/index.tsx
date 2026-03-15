import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem, Role } from '@/types';
import roles from '@/routes/roles';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { edit, destroy } from '@/actions/App/Http/Controllers/RoleController';
import { create } from '@/routes/roles';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Roles',
        href: roles.index().url,
    },
];

export default function RoleIndex({ roles }: { roles: Role[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Roles" />
            <div className="p-6">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-[#0B0829] dark:text-white">
                            Roles
                        </h1>
                        <span className="rounded-full bg-[#FF8400] px-3 py-0.5 text-sm font-medium text-white">
                            {roles.length}
                        </span>
                    </div>
                    <Link
                        href={create().url}
                        className="rounded-full bg-[#FF8400] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#E67600]"
                    >
                        + Create Role
                    </Link>
                </div>

                {/* Table Card */}
                <div className="overflow-hidden rounded-2xl border border-[#8FA0D8]/30 bg-white shadow-lg shadow-[#8FA0D8]/15 dark:border-[#8FA0D8]/20 dark:bg-[#0B0829] dark:shadow-xl dark:shadow-[#8FA0D8]/10">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-b border-[#8FA0D8]/20 bg-[#8FA0D8]/10 dark:bg-[#8FA0D8]/5">
                                <TableHead className="py-4 pl-6 font-semibold text-[#0B0829] dark:text-[#8FA0D8]">
                                    Name
                                </TableHead>
                                <TableHead className="py-4 font-semibold text-[#0B0829] dark:text-[#8FA0D8]">
                                    Guard
                                </TableHead>
                                <TableHead className="py-4 font-semibold text-[#0B0829] dark:text-[#8FA0D8]">
                                    Permissions
                                </TableHead>
                                <TableHead className="py-4 pr-6 text-right font-semibold text-[#0B0829] dark:text-[#8FA0D8]">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {roles.map((role) => (
                                <TableRow
                                    key={role.id}
                                    className="border-b border-[#8FA0D8]/10 transition hover:bg-[#8FA0D8]/5"
                                >
                                    <TableCell className="py-4 pl-6 font-medium text-[#0B0829] dark:text-white">
                                        {role.name}
                                    </TableCell>
                                    <TableCell className="py-4 text-[#6B7280] dark:text-[#8FA0D8]/70">
                                        {role.guard_name}
                                    </TableCell>
                                    <TableCell className="py-4">
                                        {role.permissions?.map((permission) => (
                                            <span
                                                key={permission.id}
                                                className="mr-1.5 mb-1 inline-block rounded-full bg-[#8FA0D8]/20 px-3 py-1 text-xs font-medium text-[#0B0829] dark:bg-[#8FA0D8]/15 dark:text-[#8FA0D8]"
                                            >
                                                {permission.name}
                                            </span>
                                        )) || (
                                            <span className="text-gray-400">
                                                —
                                            </span>
                                        )}
                                    </TableCell>
                                    <TableCell className="py-4 pr-6 text-right">
                                        <Link
                                            href={edit(role.id).url}
                                            className="mr-2 rounded-full bg-[#8FA0D8] px-4 py-1.5 text-xs font-medium text-[#0B0829] transition hover:bg-[#7B8EC4]"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            href={destroy(role.id).url}
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
