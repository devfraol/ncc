import { DashboardShell } from '@/components/dashboard/dashboard-shell';
import { requireDashboardUser } from '@/lib/clerk';
import type { PropsWithChildren } from 'react';

export default async function DashboardLayout({ children }: PropsWithChildren) {
  await requireDashboardUser();

  return <DashboardShell>{children}</DashboardShell>;
}
