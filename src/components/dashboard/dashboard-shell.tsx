import Link from 'next/link';
import type { PropsWithChildren } from 'react';

const dashboardLinks = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/dashboard/courses', label: 'My Courses' },
  { href: '/dashboard/labs', label: 'Labs' },
  { href: '/dashboard/profile', label: 'Profile' },
];

export function DashboardShell({ children }: PropsWithChildren) {
  return (
    <div className="wrapper py-10 grid gap-6 lg:grid-cols-[240px_1fr]">
      <aside className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-primary p-5 h-fit">
        <h2 className="font-semibold text-gray-900 dark:text-white/90 mb-4">NCC Dashboard</h2>
        <nav className="space-y-2">
          {dashboardLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}
