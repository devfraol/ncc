import { PageHeader } from '@/components/layout/page-header';

export default function DashboardCoursesPage() {
  return (
    <div>
      <PageHeader
        title="My Courses"
        description="Access enrolled paths and continue where you left off."
      />
      <p className="text-gray-600 dark:text-gray-400">Course enrollment data will be loaded from CMS and learner records.</p>
    </div>
  );
}
