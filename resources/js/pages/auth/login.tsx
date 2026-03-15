import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
};

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: Props) {
    return (
        <AuthLayout
            title="Log in to your account"
            description="Enter your email and password below"
        >
            <Head title="Log in" />

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-5">
                            <div className="grid gap-2">
                                <Label
                                    htmlFor="email"
                                    className="text-base font-semibold text-[#0B0829] dark:text-white"
                                >
                                    Email address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    placeholder="email@example.com"
                                    className="rounded-xl border-[#8FA0D8]/40 text-base focus:border-[#FF8400] focus:ring-[#FF8400] dark:border-[#8FA0D8]/30 dark:bg-[#0B0829] dark:text-white dark:placeholder-[#8FA0D8]/40"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label
                                        htmlFor="password"
                                        className="text-base font-semibold text-[#0B0829] dark:text-white"
                                    >
                                        Password
                                    </Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="ml-auto text-xs font-bold tracking-wider text-[#8FA0D8] uppercase transition-all duration-300 hover:text-[#FF8400] hover:drop-shadow-[0_0_8px_rgba(255,132,0,0.4)]"
                                            tabIndex={5}
                                        >
                                            Forgot password?
                                        </TextLink>
                                    )}
                                </div>
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="Password"
                                    className="rounded-xl border-[#8FA0D8]/40 text-base focus:border-[#FF8400] focus:ring-[#FF8400] dark:border-[#8FA0D8]/30 dark:bg-[#0B0829] dark:text-white dark:placeholder-[#8FA0D8]/40"
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="flex items-center space-x-3">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    tabIndex={3}
                                    className="border-[#8FA0D8]/40 data-[state=checked]:border-[#FF8400] data-[state=checked]:bg-[#FF8400]"
                                />
                                <Label
                                    htmlFor="remember"
                                    className="text-sm text-[#0B0829]/70 dark:text-[#8FA0D8]/70"
                                >
                                    Remember me
                                </Label>
                            </div>

                            <button
                                type="submit"
                                className="mt-2 w-full rounded-full bg-[#8FA0D8] py-3.5 text-base font-bold text-white shadow-lg shadow-[#8FA0D8]/30 transition hover:bg-[#7B8EC4] hover:shadow-xl hover:shadow-[#8FA0D8]/40 disabled:opacity-50"
                                tabIndex={4}
                                disabled={processing}
                            >
                                {processing && (
                                    <Spinner className="mr-2 inline" />
                                )}
                                Log in
                            </button>
                        </div>

                        {canRegister && (
                            <div className="text-center text-sm text-[#0B0829]/50 dark:text-[#8FA0D8]/50">
                                Don't have an account?{' '}
                                <TextLink
                                    href={register()}
                                    tabIndex={5}
                                    className="font-bold text-[#FF8400] hover:text-[#E67600]"
                                >
                                    Sign up
                                </TextLink>
                            </div>
                        )}
                    </>
                )}
            </Form>

            {status && (
                <div className="mt-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
        </AuthLayout>
    );
}
