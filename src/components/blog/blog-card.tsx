import Link from 'next/link';

export type BlogCardProps = {
  slug: string;
  title: string;
  excerpt: string;
};

export function BlogCard({ slug, title, excerpt }: BlogCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-primary p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white/90">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{excerpt}</p>
      <Link href={`/blog#${slug}`} className="mt-4 inline-flex text-sm font-semibold text-primary-500">
        Read article
      </Link>
    </article>
  );
}
