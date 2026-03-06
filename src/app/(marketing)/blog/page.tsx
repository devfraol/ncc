import { BlogCard } from '@/components/blog/blog-card';
import { PageHeader } from '@/components/layout/page-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
};

const posts = [
  {
    slug: 'zero-trust-basics',
    title: 'Zero Trust in Student Labs',
    excerpt: 'How to bring zero-trust controls into practical cybersecurity coursework.',
  },
  {
    slug: 'ctf-roadmap',
    title: 'Your First CTF Roadmap',
    excerpt: 'A practical route from beginner challenges to intermediate capture-the-flag events.',
  },
  {
    slug: 'soc-career-path',
    title: 'SOC Analyst Career Path',
    excerpt: 'Skill milestones and certifications for launching a SOC career.',
  },
];

export default function BlogPage() {
  return (
    <section className="py-16">
      <div className="wrapper">
        <PageHeader
          title="NCC Blog"
          description="Insights from mentors and practitioners about defensive and offensive security."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
