import { Head, Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
    },
];

type Stats = {
    totalTasks: number;
    activeTasks: number;
    totalUsers: number;
    totalRoles: number;
};

export default function Dashboard({ stats }: { stats: Stats }) {
    const { auth, userPermissions } = usePage().props as any;
    const user = auth.user;
    const roleName = user.roles?.[0]?.name || 'No role';

    const canSeeUsers = (userPermissions as string[]).includes('users.index');
    const canSeeTasks = (userPermissions as string[]).includes('tasks.index');
    const canCreateTasks = (userPermissions as string[]).includes(
        'tasks.create',
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="p-6">
                {/* Greeting */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#0B0829] dark:text-white">
                        Welcome back,{' '}
                        <span className="bg-gradient-to-r from-[#FF8400] to-[#E67600] bg-clip-text text-transparent">
                            {user.name}
                        </span>
                    </h1>
                    <div className="mt-2 flex items-center gap-2">
                        <span className="inline-block rounded-full bg-[#8FA0D8]/20 px-3 py-1 text-sm font-medium text-[#0B0829] dark:bg-[#8FA0D8]/15 dark:text-[#8FA0D8]">
                            {roleName}
                        </span>
                        <span className="text-sm text-[#0B0829]/40 dark:text-[#8FA0D8]/40">
                            {user.email}
                        </span>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Total Tasks */}
                    <div className="rounded-2xl border border-[#8FA0D8]/20 bg-white p-6 shadow-md shadow-[#8FA0D8]/10 dark:border-[#8FA0D8]/10 dark:bg-[#0B0829]/80">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-[#0B0829]/50 dark:text-[#8FA0D8]/50">
                                Total Tasks
                            </p>
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF8400]/10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-[#FF8400]"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <p className="mt-3 text-3xl font-bold text-[#0B0829] dark:text-white">
                            {stats.totalTasks}
                        </p>
                        <p className="mt-1 text-xs text-green-600 dark:text-green-400">
                            {stats.activeTasks} active
                        </p>
                    </div>

                    {/* Active Tasks */}
                    <div className="rounded-2xl border border-[#8FA0D8]/20 bg-white p-6 shadow-md shadow-[#8FA0D8]/10 dark:border-[#8FA0D8]/10 dark:bg-[#0B0829]/80">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-[#0B0829]/50 dark:text-[#8FA0D8]/50">
                                Active Tasks
                            </p>
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500/10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-green-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <p className="mt-3 text-3xl font-bold text-[#0B0829] dark:text-white">
                            {stats.activeTasks}
                        </p>
                        <p className="mt-1 text-xs text-[#0B0829]/40 dark:text-[#8FA0D8]/40">
                            {stats.totalTasks > 0
                                ? Math.round(
                                      (stats.activeTasks / stats.totalTasks) *
                                          100,
                                  )
                                : 0}
                            % of total
                        </p>
                    </div>

                    {/* Users - only for admin */}
                    {canSeeUsers && (
                        <div className="rounded-2xl border border-[#8FA0D8]/20 bg-white p-6 shadow-md shadow-[#8FA0D8]/10 dark:border-[#8FA0D8]/10 dark:bg-[#0B0829]/80">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-[#0B0829]/50 dark:text-[#8FA0D8]/50">
                                    Users
                                </p>
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8FA0D8]/10">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-[#8FA0D8]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="mt-3 text-3xl font-bold text-[#0B0829] dark:text-white">
                                {stats.totalUsers}
                            </p>
                            <p className="mt-1 text-xs text-[#0B0829]/40 dark:text-[#8FA0D8]/40">
                                registered accounts
                            </p>
                        </div>
                    )}

                    {/* Roles - only for admin */}
                    {canSeeUsers && (
                        <div className="rounded-2xl border border-[#8FA0D8]/20 bg-white p-6 shadow-md shadow-[#8FA0D8]/10 dark:border-[#8FA0D8]/10 dark:bg-[#0B0829]/80">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-[#0B0829]/50 dark:text-[#8FA0D8]/50">
                                    Roles
                                </p>
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F9DFC6]/50 dark:bg-[#FF8400]/10">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-[#FF8400]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p className="mt-3 text-3xl font-bold text-[#0B0829] dark:text-white">
                                {stats.totalRoles}
                            </p>
                            <p className="mt-1 text-xs text-[#0B0829]/40 dark:text-[#8FA0D8]/40">
                                permission groups
                            </p>
                        </div>
                    )}
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-3">
                    {canSeeTasks && (
                        <Link
                            href="/tasks"
                            className="rounded-full border border-[#8FA0D8]/30 px-5 py-2.5 text-sm font-medium text-[#0B0829] transition hover:bg-[#8FA0D8]/10 dark:border-[#8FA0D8]/20 dark:text-[#8FA0D8] dark:hover:bg-[#8FA0D8]/10"
                        >
                            View Tasks
                        </Link>
                    )}
                    {canCreateTasks && (
                        <Link
                            href="/tasks/create"
                            className="rounded-full bg-[#FF8400] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#E67600]"
                        >
                            + New Task
                        </Link>
                    )}
                    {canSeeUsers && (
                        <Link
                            href="/users"
                            className="rounded-full border border-[#8FA0D8]/30 px-5 py-2.5 text-sm font-medium text-[#0B0829] transition hover:bg-[#8FA0D8]/10 dark:border-[#8FA0D8]/20 dark:text-[#8FA0D8] dark:hover:bg-[#8FA0D8]/10"
                        >
                            Manage Users
                        </Link>
                    )}
                    {canSeeUsers && (
                        <Link
                            href="/roles"
                            className="rounded-full border border-[#8FA0D8]/30 px-5 py-2.5 text-sm font-medium text-[#0B0829] transition hover:bg-[#8FA0D8]/10 dark:border-[#8FA0D8]/20 dark:text-[#8FA0D8] dark:hover:bg-[#8FA0D8]/10"
                        >
                            Manage Roles
                        </Link>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
