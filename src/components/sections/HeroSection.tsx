'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { CyberButton } from '@/components/ui/cyber-button';

const heroData = {
  title: 'Build your cyber career with hands-on missions and guided learning.',
  subtitle:
    'NCC Academy helps future defenders learn networking and cybersecurity through practical challenges, mentor support, and structured paths.',
  typingMessages: [
    'Learn Networking & Cybersecurity',
    'Hack, Secure, Repeat',
    'Next Cyber Camp – Your Cyber Academy',
  ],
};

export default function HeroSection() {
  const messages = useMemo(() => heroData.typingMessages, []);
  const [messageIndex, setMessageIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = messages[messageIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < current.length) {
        setDisplayText(current.slice(0, displayText.length + 1));
        return;
      }

      if (isDeleting && displayText.length > 0) {
        setDisplayText(current.slice(0, displayText.length - 1));
        return;
      }

      if (!isDeleting) {
        setIsDeleting(true);
        return;
      }

      setIsDeleting(false);
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, displayText === current && !isDeleting ? 1200 : speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, messageIndex, messages]);

  return (
    <section className="relative overflow-hidden border-b border-cyan-500/10 bg-[#060b17] py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(20,184,166,0.18),transparent_36%),radial-gradient(circle_at_85%_0%,rgba(139,92,246,0.2),transparent_32%)]" />
      <Image src="/images/hero/shape-left-1.svg" alt="" width={220} height={280} className="pointer-events-none absolute left-0 top-0 opacity-40" />
      <Image src="/images/hero/shape-right-2.svg" alt="" width={240} height={260} className="pointer-events-none absolute bottom-0 right-0 opacity-45" />

      <div className="wrapper relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.22em] text-cyan-300">
            Next Cyber Camp Academy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{heroData.title}</h1>
          <p className="mt-5 max-w-xl text-slate-300">{heroData.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <CyberButton href="/auth/sign-up">Get Started</CyberButton>
            <CyberButton href="/courses" variant="secondary">
              Explore Courses
            </CyberButton>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-400/20 bg-slate-950/70 p-6 shadow-[0_0_70px_rgba(16,185,129,0.14)]">
          <div className="mb-6 flex items-center gap-2">
            <span className="size-3 rounded-full bg-rose-400" />
            <span className="size-3 rounded-full bg-yellow-300" />
            <span className="size-3 rounded-full bg-green-400" />
            <p className="ml-3 text-xs text-slate-400">terminal@ncc-academy</p>
          </div>
          <p className="font-mono text-sm text-emerald-300 sm:text-base">
            <span className="text-cyan-300">$</span> {displayText}
            <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-cyan-300/70 align-middle" />
          </p>
          <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/70 p-4 text-xs text-slate-300">
            Simulated SOC feed is active. New attack paths and defense scenarios unlock as you progress.
          </div>
        </div>
      </div>
    </section>
  );
}
