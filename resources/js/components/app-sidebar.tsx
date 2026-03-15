import { Link, usePage } from '@inertiajs/react';
import { BookOpen, FolderGit2, LayoutGrid, User2Icon, KeyRoundIcon, BadgeCheckIcon, UserRoundCheck } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';
import users from '@/routes/users';
import roles from '@/routes/roles';
import permissions from '@/routes/permissions';
import tasks from '@/routes/tasks';

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    const { userPermissions } = usePage().props as { userPermissions: string[] };

    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: dashboard(),
            icon: LayoutGrid,
        },
    ];

    // Only admin can see Users
    if (userPermissions.includes('users.index')) {
        mainNavItems.push({
            title: 'Users',
            href: users.index(),
            icon: User2Icon,
        });
        mainNavItems.push({
            title: 'Roles',
            href: roles.index(),
            icon: UserRoundCheck,
        });
        mainNavItems.push({
            title: 'Permissions',
            href: permissions.index(),
            icon: KeyRoundIcon,
        });
    }

    // Anyone with tasks.index can see Tasks
    if (userPermissions.includes('tasks.index')) {
        mainNavItems.push({
            title: 'Tasks',
            href: tasks.index(),
            icon: BadgeCheckIcon,
        });
    }

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
