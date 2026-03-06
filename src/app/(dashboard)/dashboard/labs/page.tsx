import { PageHeader } from '@/components/layout/page-header';

export default function DashboardLabsPage() {
  return (
    <div>
      <PageHeader
        title="Labs"
        description="Hands-on security labs mapped to each module."
      />
      <p className="text-gray-600 dark:text-gray-400">Lab progress and submissions will be connected in this section.</p>
    </div>
  );
}
