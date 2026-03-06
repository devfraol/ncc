import { CourseCard } from '@/components/course/course-card';
import { PageHeader } from '@/components/layout/page-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courses',
};

const courses = [
  {
    slug: 'soc-fundamentals',
    title: 'SOC Fundamentals',
    summary: 'Understand blue-team workflows, triage, and incident response lifecycle.',
    level: 'Beginner' as const,
  },
  {
    slug: 'web-pentest',
    title: 'Web Application Pentesting',
    summary: 'Learn reconnaissance, exploitation, and remediation strategies for modern apps.',
    level: 'Intermediate' as const,
  },
  {
    slug: 'threat-hunting',
    title: 'Threat Hunting Lab Series',
    summary: 'Practice adversary detection with SIEM and endpoint telemetry.',
    level: 'Advanced' as const,
  },
];

export default function CoursesPage() {
  return (
    <section className="py-16">
      <div className="wrapper">
        <PageHeader
          title="NCC Courses"
          description="Role-based cybersecurity pathways designed for students and career changers."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
