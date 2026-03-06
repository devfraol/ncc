import type { ReactNode } from 'react';

type PageHeaderProps = {
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white/90">{title}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      {actions}
    </header>
  );
}
