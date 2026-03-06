import { PageHeader } from '@/components/layout/page-header';

export default function DashboardProfilePage() {
  return (
    <div>
      <PageHeader
        title="Profile"
        description="Manage identity, preferences, and account security settings."
      />
      <p className="text-gray-600 dark:text-gray-400">Profile controls will be integrated with Clerk user management.</p>
    </div>
  );
}
