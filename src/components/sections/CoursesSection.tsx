import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
import { CyberCard } from '@/components/ui/cyber-card';
import { CyberButton } from '@/components/ui/cyber-button';

const coursesData = {
  eyebrow: 'Courses',
  title: 'Choose your learning path',
  description: 'Static data for now, structured for easy CMS integration later.',
  courses: [
    {
      title: 'Networking Fundamentals',
      description: 'Master TCP/IP, subnets, routing, and packet flow with practical exercises.',
      level: 'Beginner',
      slug: 'networking-fundamentals',
    },
    {
      title: 'SOC Analyst Essentials',
      description: 'Analyze logs, detect incidents, and triage alerts like a junior blue-team analyst.',
      level: 'Intermediate',
      slug: 'soc-analyst-essentials',
    },
    {
      title: 'Web Application Penetration Testing',
      description: 'Explore OWASP Top 10 and run controlled attacks in lab-safe environments.',
      level: 'Advanced',
      slug: 'web-application-penetration-testing',
    },
    {
      title: 'Linux for Security Practitioners',
      description: 'Build command-line fluency for hardening systems and incident response workflows.',
      level: 'Beginner',
      slug: 'linux-for-security-practitioners',
    },
    {
      title: 'Digital Forensics Foundations',
      description: 'Collect, preserve, and analyze forensic artifacts to investigate security events.',
      level: 'Intermediate',
      slug: 'digital-forensics-foundations',
    },
    {
      title: 'Red Team Operations',
      description: 'Design adversary emulations, escalate privileges, and report findings responsibly.',
      level: 'Advanced',
      slug: 'red-team-operations',
    },
  ],
};

export default function CoursesSection() {
  return (
    <section className="wrapper py-18 sm:py-24">
      <SectionHeading
        eyebrow={coursesData.eyebrow}
        title={coursesData.title}
        description={coursesData.description}
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {coursesData.courses.map((course) => (
          <CyberCard key={course.slug}>
            <div className="mb-4 inline-flex rounded-full border border-violet-400/35 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
              {course.level}
            </div>
            <h3 className="text-xl font-semibold text-white">{course.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{course.description}</p>
            <div className="mt-6">
              <CyberButton href={`/courses/${course.slug}`} className="w-full">
                View Course
              </CyberButton>
            </div>
          </CyberCard>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/courses" className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
          Browse full course catalog →
        </Link>
      </div>
    </section>
  );
}
