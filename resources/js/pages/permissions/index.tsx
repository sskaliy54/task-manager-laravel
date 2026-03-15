import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem, Permission } from '@/types';
import permissions from '@/routes/permissions';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Permissions',
        href: permissions.index().url,
    },
];

export default function PermissionIndex({
    permissions,
}: {
    permissions: Permission[];
}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Permissions" />
            <div className="p-6">
                <div className="mb-6 flex items-center gap-3">
                    <h1 className="text-2xl font-bold text-[#0B0829] dark:text-white">
                        Permissions
                    </h1>
                    <span className="rounded-full bg-[#FF8400] px-3 py-0.5 text-sm font-medium text-white">
                        {permissions.length}
                    </span>
                </div>

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
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {permissions.map((permission) => (
                                <TableRow
                                    key={permission.id}
                                    className="border-b border-[#8FA0D8]/10 transition hover:bg-[#8FA0D8]/5"
                                >
                                    <TableCell className="py-4 pl-6 font-medium text-[#0B0829] dark:text-white">
                                        {permission.name}
                                    </TableCell>
                                    <TableCell className="py-4 text-[#6B7280] dark:text-[#8FA0D8]/70">
                                        {permission.guard_name}
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
