import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />

            <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F9DFC6]/30 via-white to-[#8FA0D8]/15 dark:from-[#0B0829] dark:via-[#111035] dark:to-[#0B0829]">
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#8FA0D8]/20 blur-3xl dark:bg-[#8FA0D8]/10" />
                <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-[#F9DFC6]/30 blur-3xl dark:bg-[#FF8400]/5" />

                <div className="relative z-10 mx-4 flex w-full max-w-4xl overflow-hidden rounded-3xl border border-[#8FA0D8]/20 bg-white/80 shadow-2xl shadow-[#8FA0D8]/20 backdrop-blur-sm dark:border-[#8FA0D8]/10 dark:bg-[#0B0829]/80 dark:shadow-[#8FA0D8]/10">
                    {/* Left Side - Butterfly */}
                    <div className="relative hidden w-1/2 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1550] via-[#2a2070] to-[#1a1550] lg:flex">
                        <div className="absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8FA0D8]/25 blur-3xl" />
                        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8FA0D8]/20 blur-2xl" />
                        <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-xl" />

                        <img
                            src="butterfly.png"
                            alt=""
                            className="relative z-10 w-72 brightness-125 contrast-110"
                        />

                        <div className="relative z-10 mt-6 text-center">
                            <p className="bg-gradient-to-r from-[#8FA0D8] to-[#b8c4e8] bg-clip-text text-sm font-semibold tracking-widest text-transparent uppercase">
                                Task Management System
                            </p>
                            <p className="mt-2 text-[10px] font-medium tracking-[0.2em] text-[#8FA0D8]/40 uppercase">
                                Secure · Role-based
                            </p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex w-full flex-col items-center justify-center px-8 py-14 lg:w-1/2 lg:px-14">
                        <img
                            src="butterfly.png"
                            alt=""
                            className="mb-4 w-24 opacity-80 lg:hidden"
                        />

                        <h1 className="bg-gradient-to-r from-[#0B0829] to-[#8FA0D8] bg-clip-text text-5xl font-extrabold text-transparent">
                            Hello!
                        </h1>
                        <p className="mt-2 bg-gradient-to-r from-[#8FA0D8] to-[#6B82C4] bg-clip-text text-xl font-bold text-transparent">
                            Welcome Back
                        </p>

                        {auth.user ? (
                            <div className="mt-10 w-full max-w-xs">
                                <p className="mb-5 text-center text-sm text-[#0B0829]/50 dark:text-[#8FA0D8]/50">
                                    You are already logged in
                                </p>
                                <Link
                                    href={dashboard()}
                                    className="block w-full rounded-full bg-[#8FA0D8] py-3.5 text-center text-base font-bold text-white shadow-lg shadow-[#8FA0D8]/30 transition hover:bg-[#7B8EC4] hover:shadow-xl"
                                >
                                    Go to Dashboard
                                </Link>
                            </div>
                        ) : (
                            <div className="mt-10 w-full max-w-xs">
                                <p className="mb-8 text-center text-sm font-medium text-[#0B0829]/50 dark:text-[#8FA0D8]/50">
                                    Sign in to access your account
                                </p>

                                <div className="grid gap-4">
                                    <Link
                                        href={login()}
                                        className="block w-full rounded-full bg-[#8FA0D8] py-3.5 text-center text-base font-bold text-white shadow-lg shadow-[#8FA0D8]/30 transition hover:bg-[#7B8EC4] hover:shadow-xl hover:shadow-[#8FA0D8]/40"
                                    >
                                        Log in
                                    </Link>

                                    {canRegister && (
                                        <Link
                                            href={register()}
                                            className="block w-full rounded-full border-2 border-[#8FA0D8]/30 bg-transparent py-3.5 text-center text-base font-bold text-[#0B0829] transition hover:border-[#8FA0D8]/60 hover:bg-[#8FA0D8]/5 dark:text-white dark:hover:bg-[#8FA0D8]/10"
                                        >
                                            Create Account
                                        </Link>
                                    )}
                                </div>

                                <div className="mt-10 flex justify-center gap-8">
                                    <div className="text-center">
                                        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#F9DFC6]/50 dark:bg-[#8FA0D8]/10">
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
                                        <p className="text-xs font-medium text-[#0B0829]/60 dark:text-[#8FA0D8]/50">
                                            Secure
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#F9DFC6]/50 dark:bg-[#8FA0D8]/10">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-[#FF8400]"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                            </svg>
                                        </div>
                                        <p className="text-xs font-medium text-[#0B0829]/60 dark:text-[#8FA0D8]/50">
                                            Roles
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#F9DFC6]/50 dark:bg-[#8FA0D8]/10">
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
                                        <p className="text-xs font-medium text-[#0B0829]/60 dark:text-[#8FA0D8]/50">
                                            Tasks
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
