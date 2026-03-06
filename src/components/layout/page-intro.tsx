interface PageIntroProps {
  title: string;
  description: string;
}

export default function PageIntro({ title, description }: PageIntroProps) {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col justify-center px-6 py-16">
      <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-primary">Next Cyber Camp</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{description}</p>
      </div>
    </main>
  );
}
