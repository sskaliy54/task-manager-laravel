import { Link } from '@inertiajs/react';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F9DFC6]/30 via-white to-[#8FA0D8]/15 dark:from-[#0B0829] dark:via-[#111035] dark:to-[#0B0829]">
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#8FA0D8]/20 blur-3xl dark:bg-[#8FA0D8]/10" />
            <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-[#F9DFC6]/30 blur-3xl dark:bg-[#FF8400]/5" />

            <div className="relative z-10 mx-4 w-full max-w-md">
                <div className="rounded-2xl border border-[#8FA0D8]/20 bg-white/80 p-8 shadow-2xl shadow-[#8FA0D8]/20 backdrop-blur-sm dark:border-[#8FA0D8]/10 dark:bg-[#0B0829]/80 dark:shadow-[#8FA0D8]/10">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col items-center gap-4">
                            <Link
                                href={home()}
                                className="flex flex-col items-center gap-2"
                            >
                                <img
                                    src="butterfly.png"
                                    alt=""
                                    className="w-16 opacity-80"
                                />
                            </Link>

                            <div className="space-y-1 text-center">
                                <h1 className="text-3xl font-black tracking-tight text-[#0B0829] dark:text-white">
                                    <span className="bg-gradient-to-r from-[#8FA0D8] to-[#FF8400] bg-clip-text text-transparent">
                                        {title}
                                    </span>
                                </h1>
                                <p className="mx-auto max-w-[250px] text-sm leading-relaxed font-medium text-[#0B0829]/60 dark:text-[#8FA0D8]/60">
                                    {description}
                                </p>
                                <div className="mx-auto h-1 w-12 rounded-full bg-[#FF8400]/20" />
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
