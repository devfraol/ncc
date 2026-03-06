import Link from 'next/link';
import { cn } from '@/lib/utils';

import type { ReactNode } from 'react';

type CyberButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export function CyberButton({ href, children, variant = 'primary', className }: CyberButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold tracking-wide transition duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70',
        variant === 'primary'
          ? 'border-cyan-400/80 bg-cyan-400/15 text-cyan-200 shadow-[0_0_32px_rgba(34,211,238,0.25)] hover:-translate-y-0.5 hover:bg-cyan-400/25'
          : 'border-violet-400/70 bg-violet-400/10 text-violet-200 hover:-translate-y-0.5 hover:bg-violet-400/20',
        className,
      )}
    >
      {children}
    </Link>
  );
}
