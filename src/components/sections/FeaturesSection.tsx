import { CyberCard } from '@/components/ui/cyber-card';
import { SectionHeading } from '@/components/ui/section-heading';

const featuresData = {
  eyebrow: 'Why NCC',
  title: 'A practical academy built for real outcomes',
  description: 'Reusable feature cards designed to plug into future CMS-driven pages.',
  features: [
    {
      title: 'Real-world Labs',
      description: 'Practice with scenarios inspired by active incidents and modern attacker playbooks.',
      icon: '🧪',
    },
    {
      title: 'Expert Mentors',
      description: 'Learn from cybersecurity professionals with red, blue, and purple team experience.',
      icon: '🛰️',
    },
    {
      title: 'Progress Tracking',
      description: 'Track module completion, skills gained, and lab milestones in one dashboard.',
      icon: '📈',
    },
    {
      title: 'Community Support',
      description: 'Join collaborative cohorts, peer reviews, and challenge-based community events.',
      icon: '🤝',
    },
  ],
};

export default function FeaturesSection() {
  return (
    <section className="wrapper py-18 sm:py-24">
      <SectionHeading
        eyebrow={featuresData.eyebrow}
        title={featuresData.title}
        description={featuresData.description}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuresData.features.map((feature) => (
          <CyberCard key={feature.title} className="h-full">
            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-400/10 text-xl">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
          </CyberCard>
        ))}
      </div>
    </section>
  );
}
