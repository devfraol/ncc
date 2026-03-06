import Image from 'next/image';
import { CyberCard } from '@/components/ui/cyber-card';
import { SectionHeading } from '@/components/ui/section-heading';

const testimonialsData = {
  eyebrow: 'Social Proof',
  title: 'Trusted by aspiring and advancing cyber professionals',
  description: 'Seed testimonials now, ready to be replaced by Strapi content later.',
  testimonials: [
    {
      name: 'Ava Kim',
      role: 'Junior SOC Analyst',
      avatar: '/images/users/user-1.png',
      quote: 'The labs feel real. I went from theory-heavy studying to incident-driven learning in weeks.',
    },
    {
      name: 'Marcus Reed',
      role: 'IT Support to Security Career Switcher',
      avatar: '/images/users/user-2.png',
      quote: 'The roadmap and mentor feedback helped me build confidence for cybersecurity interviews.',
    },
    {
      name: 'Noor El-Sayed',
      role: 'Computer Science Student',
      avatar: '/images/users/user-3.png',
      quote: 'NCC gave me structured progression and practical labs that instantly improved my portfolio.',
    },
  ],
};

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-900/45 py-18 sm:py-24">
      <div className="wrapper">
        <SectionHeading
          eyebrow={testimonialsData.eyebrow}
          title={testimonialsData.title}
          description={testimonialsData.description}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonialsData.testimonials.map((item) => (
            <CyberCard key={item.name} className="hover:shadow-[0_10px_40px_rgba(168,85,247,0.2)]">
              <p className="text-sm leading-7 text-slate-200">“{item.quote}”</p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <Image src={item.avatar} alt={item.name} width={42} height={42} className="rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
            </CyberCard>
          ))}
        </div>
      </div>
    </section>
  );
}
