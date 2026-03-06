import { PageHeader } from '@/components/layout/page-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="wrapper max-w-3xl">
        <PageHeader
          title="About Next Cyber Camp"
          description="NCC helps aspiring cyber professionals build real-world skills through labs, mentorship, and guided pathways."
        />
        <p className="text-gray-600 dark:text-gray-400 leading-7">
          We are building a platform-first academy where content, courses, and progress tracking can scale across cohorts and enterprise learners. This architecture separates public marketing experiences from authenticated student learning spaces to keep future integrations clean and maintainable.
        </p>
      </div>
    </section>
  );
}
