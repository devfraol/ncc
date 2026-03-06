import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type CyberCardProps = {
  children: ReactNode;
  className?: string;
};

export function CyberCard({ children, className }: CyberCardProps) {
  return (
    <article
      className={cn(
        'group rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-sm transition duration-300',
        'hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_12px_40px_rgba(34,211,238,0.18)]',
        className,
      )}
    >
      {children}
    </article>
  );
}
