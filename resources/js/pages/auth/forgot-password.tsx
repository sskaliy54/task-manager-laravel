import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes';
import { email } from '@/routes/password';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <AuthLayout
            title="Forgot password"
            description="Enter your email to receive a password reset link"
        >
            <Head title="Forgot password" />

            {status && (
                <div className="text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <Form {...email.form()} className="flex flex-col gap-6">
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
                                    autoComplete="off"
                                    autoFocus
                                    placeholder="email@example.com"
                                    className="rounded-xl border-[#8FA0D8]/40 text-base focus:border-[#FF8400] focus:ring-[#FF8400] dark:border-[#8FA0D8]/30 dark:bg-[#0B0829] dark:text-white dark:placeholder-[#8FA0D8]/40"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full rounded-full bg-[#8FA0D8] py-3.5 text-base font-bold text-white shadow-lg shadow-[#8FA0D8]/30 transition hover:bg-[#7B8EC4] hover:shadow-xl hover:shadow-[#8FA0D8]/40 disabled:opacity-50"
                                data-test="email-password-reset-link-button"
                            >
                                {processing && (
                                    <Spinner className="mr-2 inline" />
                                )}
                                Send reset link
                            </button>
                        </div>

                        <div className="text-center text-sm text-[#0B0829]/50 dark:text-[#8FA0D8]/50">
                            Or, return to{' '}
                            <TextLink
                                href={login()}
                                className="font-bold text-[#FF8400] hover:text-[#E67600]"
                            >
                                Log in
                            </TextLink>
                        </div>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
