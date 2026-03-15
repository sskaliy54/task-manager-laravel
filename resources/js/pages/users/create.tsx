import { Head, Link, Form } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem, Role } from '@/types';
import users from '@/routes/users';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import { Spinner } from '@/components/ui/spinner';
import UserController from '@/actions/App/Http/Controllers/UserController';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: users.index().url,
    },
    {
        title: 'Create',
        href: users.create().url,
    },
];

export default function UserCreate({ roles }: { roles: Role[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create User" />
            <div className="p-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="bg-gradient-to-r from-[#FF8400] to-[#E67600] bg-clip-text text-3xl font-bold text-transparent">
                        Create User
                    </h1>
                    <p className="mt-2 text-base text-gray-500 dark:text-[#8FA0D8]/60">
                        Add a new user to the system
                    </p>
                </div>

                {/* Form Card */}
                <div className="mx-auto max-w-lg rounded-2xl border border-[#8FA0D8]/40 bg-white p-8 shadow-lg shadow-[#8FA0D8]/15 dark:border-[#8FA0D8]/30 dark:bg-[#0B0829]/50 dark:shadow-xl dark:shadow-[#8FA0D8]/10">
                    <Form
                        {...UserController.store.form()}
                        resetOnSuccess={['password', 'password_confirmation']}
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
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        name="name"
                                        placeholder="Full name"
                                        className="rounded-xl border-[#8FA0D8]/40 text-base focus:border-[#FF8400] focus:ring-[#FF8400] dark:border-[#8FA0D8]/30 dark:bg-[#0B0829] dark:text-white dark:placeholder-[#8FA0D8]/40"
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-1"
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="email"
                                        className="text-base text-[#0B0829] dark:text-[#8FA0D8]"
                                    >
                                        Email address
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        tabIndex={2}
                                        autoComplete="email"
                                        name="email"
                                        placeholder="email@example.com"
                                        className="rounded-xl border-[#8FA0D8]/40 text-base focus:border-[#FF8400] focus:ring-[#FF8400] dark:border-[#8FA0D8]/30 dark:bg-[#0B0829] dark:text-white dark:placeholder-[#8FA0D8]/40"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="password"
                                        className="text-base text-[#0B0829] dark:text-[#8FA0D8]"
                                    >
                                        Password
                                    </Label>
                                    <PasswordInput
                                        id="password"
                                        required
                                        tabIndex={3}
                                        autoComplete="new-password"
                                        name="password"
                                        placeholder="Password"
                                        className="rounded-xl border-[#8FA0D8]/40 text-base focus:border-[#FF8400] focus:ring-[#FF8400] dark:border-[#8FA0D8]/30 dark:bg-[#0B0829] dark:text-white dark:placeholder-[#8FA0D8]/40"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="password_confirmation"
                                        className="text-base text-[#0B0829] dark:text-[#8FA0D8]"
                                    >
                                        Confirm password
                                    </Label>
                                    <PasswordInput
                                        id="password_confirmation"
                                        required
                                        tabIndex={4}
                                        autoComplete="new-password"
                                        name="password_confirmation"
                                        placeholder="Confirm password"
                                        className="rounded-xl border-[#8FA0D8]/40 text-base focus:border-[#FF8400] focus:ring-[#FF8400] dark:border-[#8FA0D8]/30 dark:bg-[#0B0829] dark:text-white dark:placeholder-[#8FA0D8]/40"
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="role"
                                        className="text-base text-[#0B0829] dark:text-[#8FA0D8]"
                                    >
                                        Role
                                    </Label>
                                    <select
                                        id="role"
                                        name="role"
                                        tabIndex={5}
                                        className="rounded-xl border border-[#8FA0D8]/40 bg-transparent px-3 py-2 text-base focus:border-[#FF8400] focus:ring-[#FF8400] dark:border-[#8FA0D8]/30 dark:bg-[#0B0829] dark:text-white"
                                    >
                                        <option value="">No role</option>
                                        {roles.map((role) => (
                                            <option
                                                key={role.id}
                                                value={role.name}
                                            >
                                                {role.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    tabIndex={6}
                                    disabled={processing}
                                    className="mt-3 w-full rounded-full bg-[#FF8400] py-3.5 text-base font-semibold text-white shadow-lg shadow-[#FF8400]/25 transition hover:bg-[#E67600] hover:shadow-xl hover:shadow-[#FF8400]/30 disabled:opacity-50"
                                >
                                    {processing && (
                                        <Spinner className="mr-2 inline" />
                                    )}
                                    Create account
                                </button>

                                <Link
                                    href={users.index().url}
                                    className="text-center text-sm text-[#8FA0D8]/70 transition hover:text-[#FF8400]"
                                >
                                    ← Back to users
                                </Link>
                            </div>
                        )}
                    </Form>
                </div>
            </div>
        </AppLayout>
    );
}
