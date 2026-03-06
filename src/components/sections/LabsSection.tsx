import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { CyberCard } from '@/components/ui/cyber-card';
import { CyberButton } from '@/components/ui/cyber-button';

const labsData = {
  eyebrow: 'Labs & Challenges',
  title: 'Train in realistic cyber scenarios',
  description: 'Guided hands-on labs that mirror real-world incidents and adversary behavior.',
  labs: [
    {
      id: 'phishing-incident-lab',
      title: 'Phishing Incident Response',
      summary: 'Investigate suspicious inbox activity and trace attacker infrastructure.',
      icon: '/images/logo/generators/email.svg',
    },
    {
      id: 'siem-alert-hunt',
      title: 'SIEM Alert Hunt',
      summary: 'Correlate logs and isolate noisy alerts from real compromise indicators.',
      icon: '/images/logo/generators/text.svg',
    },
    {
      id: 'web-app-defense-lab',
      title: 'Web App Defense Drill',
      summary: 'Patch vulnerabilities, configure WAF rules, and validate mitigation coverage.',
      icon: '/images/logo/generators/code.svg',
    },
  ],
};

export default function LabsSection() {
  return (
    <section className="bg-slate-900/45 py-18 sm:py-24">
      <div className="wrapper">
        <SectionHeading
          eyebrow={labsData.eyebrow}
          title={labsData.title}
          description={labsData.description}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {labsData.labs.map((lab) => (
            <CyberCard key={lab.id} className="hover:border-emerald-400/40 hover:shadow-[0_14px_40px_rgba(16,185,129,0.2)]">
              <Image src={lab.icon} alt="" width={36} height={36} className="mb-5 rounded-md border border-white/15 bg-white/5 p-1.5" />
              <h3 className="text-lg font-semibold text-white">{lab.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{lab.summary}</p>
              <div className="mt-6">
                <CyberButton href={`/dashboard/labs/${lab.id}`} variant="secondary" className="w-full">
                  Try Lab
                </CyberButton>
              </div>
            </CyberCard>
          ))}
        </div>
      </div>
    </section>
  );
}
