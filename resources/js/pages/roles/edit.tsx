import { Head, Link, Form } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem, Role, Permission } from '@/types';
import roles from '@/routes/roles';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Spinner } from '@/components/ui/spinner';
import RoleController from '@/actions/App/Http/Controllers/RoleController';

export default function RoleEdit({
    role,
    permissions,
}: {
    role: Role;
    permissions: Permission[];
}) {
    const rolePermissionNames = role.permissions?.map((p) => p.name) || [];

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Roles',
            href: roles.index().url,
        },
        {
            title: 'Edit',
            href: roles.edit(role.id).url,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit ${role.name}`} />
            <div className="p-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="bg-gradient-to-r from-[#FF8400] to-[#E67600] bg-clip-text text-3xl font-bold text-transparent">
                        Edit Role
                    </h1>
                    <p className="mt-2 text-base text-gray-500 dark:text-[#8FA0D8]/60">
                        Update role «{role.name}»
                    </p>
                </div>

                {/* Form Card */}
                <div className="mx-auto max-w-lg rounded-2xl border border-[#8FA0D8]/40 bg-white p-8 shadow-lg shadow-[#8FA0D8]/15 dark:border-[#8FA0D8]/30 dark:bg-[#0B0829] dark:shadow-xl dark:shadow-[#8FA0D8]/10">
                    <Form
                        {...RoleController.update.form(role.id)}
                        disableWhileProcessing
                        className="flex flex-col gap-6"
                    >
                        {({ processing, errors }) => (
                            <div className="grid gap-5">
                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="name"
                                        className="text-base text-[#0B0829] dark:text-[#8FA0D8]"
                                    >
                                        Role name
                                    </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        name="name"
                                        defaultValue={role.name}
                                        placeholder="e.g. admin, editor, user"
                                        className="rounded-xl border-[#8FA0D8]/40 text-base focus:border-[#FF8400] focus:ring-[#FF8400] dark:border-[#8FA0D8]/30 dark:bg-[#0B0829] dark:text-white dark:placeholder-[#8FA0D8]/40"
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-1"
                                    />
                                </div>

                                {/* Permissions */}
                                <div className="grid gap-3">
                                    <Label className="text-base text-[#0B0829] dark:text-[#8FA0D8]">
                                        Permissions
                                    </Label>
                                    <div className="grid grid-cols-2 gap-2 rounded-xl border border-[#8FA0D8]/30 p-4 dark:border-[#8FA0D8]/20">
                                        {permissions.map((permission) => (
                                            <label
                                                key={permission.id}
                                                className="flex cursor-pointer items-center gap-2 rounded-lg p-2 transition hover:bg-[#8FA0D8]/10"
                                            >
                                                <input
                                                    type="checkbox"
                                                    name="permissions[]"
                                                    value={permission.name}
                                                    defaultChecked={rolePermissionNames.includes(
                                                        permission.name,
                                                    )}
                                                    className="h-4 w-4 rounded border-[#8FA0D8]/40 text-[#FF8400] focus:ring-[#FF8400]"
                                                />
                                                <span className="text-sm text-[#0B0829] dark:text-[#8FA0D8]/80">
                                                    {permission.name}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    tabIndex={2}
                                    disabled={processing}
                                    className="mt-3 w-full rounded-full bg-[#8FA0D8] py-3.5 text-base font-semibold text-[#0B0829] shadow-lg shadow-[#8FA0D8]/25 transition hover:bg-[#7B8EC4] hover:shadow-xl hover:shadow-[#8FA0D8]/30 disabled:opacity-50"
                                >
                                    {processing && (
                                        <Spinner className="mr-2 inline" />
                                    )}
                                    Update role
                                </button>

                                <Link
                                    href={roles.index().url}
                                    className="text-center text-sm text-[#8FA0D8]/70 transition hover:text-[#FF8400]"
                                >
                                    ← Back to roles
                                </Link>
                            </div>
                        )}
                    </Form>
                </div>
            </div>
        </AppLayout>
    );
}
