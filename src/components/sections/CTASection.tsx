import { CyberButton } from '@/components/ui/cyber-button';

const ctaData = {
  title: 'Join the Next Cyber Camp – Start your cybersecurity journey today!',
  signUpHref: '/auth/sign-up',
  learnMoreHref: '/courses',
};

export default function CTASection() {
  return (
    <section className="wrapper py-18 sm:py-24">
      <div className="rounded-3xl border border-cyan-400/25 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_48%),#050b18] px-6 py-14 text-center sm:px-10">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{ctaData.title}</h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CyberButton href={ctaData.signUpHref}>Sign Up</CyberButton>
          <CyberButton href={ctaData.learnMoreHref} variant="secondary">
            Learn More
          </CyberButton>
        </div>
      </div>
    </section>
  );
}
