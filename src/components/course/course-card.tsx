import Link from 'next/link';

export type CourseCardProps = {
  slug: string;
  title: string;
  summary: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
};

export function CourseCard({ slug, title, summary, level }: CourseCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-primary p-6">
      <p className="text-xs font-semibold uppercase text-primary-500">{level}</p>
      <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white/90">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{summary}</p>
      <Link
        href={`/courses#${slug}`}
        className="mt-4 inline-flex text-sm font-semibold text-primary-500"
      >
        View syllabus
      </Link>
    </article>
  );
}
