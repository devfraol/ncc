import type { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return <section data-protected-area="dashboard">{children}</section>;
}
