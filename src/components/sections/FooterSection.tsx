import Link from 'next/link';
import { getCurrentYear } from '@/lib/utils';

const footerData = {
  links: [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Privacy', href: '/privacy' },
  ],
  social: [
    { label: 'X', href: 'https://x.com', icon: '𝕏' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
    { label: 'GitHub', href: 'https://github.com', icon: 'GH' },
  ],
};

export default function FooterSection() {
  return (
    <footer className="border-t border-cyan-500/10 bg-[#040913] py-10">
      <div className="wrapper flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-cyan-200">NCC Academy</p>
          <p className="mt-2 text-xs text-slate-400">© {getCurrentYear()} Next Cyber Camp. All rights reserved.</p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {footerData.links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm text-slate-300 transition hover:text-cyan-200">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {footerData.social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-xs font-semibold text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-200"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
