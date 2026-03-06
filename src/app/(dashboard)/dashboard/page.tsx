import { PageHeader } from '@/components/layout/page-header';

export default function DashboardHomePage() {
  return (
    <div>
      <PageHeader
        title="Welcome back"
        description="Track your NCC path, lab completion, and readiness milestones."
      />
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-primary p-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Dashboard widgets (progress, streaks, and mentor feedback) will be connected here.
        </p>
      </div>
    </div>
  );
}
