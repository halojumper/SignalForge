import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
import MetricCards from '@/components/MetricCards';

export const metadata: Metadata = { title: 'Home' };

const teasers = [
  { icon: '⚡', title: 'Services', desc: 'Marketing automation, SMS, social campaigns, ad creative, website builds, and event marketing — all under one roof.', href: '/services', cta: 'See all services →' },
  { icon: '🗺️', title: 'How It Works', desc: 'A straightforward four-step process from discovery call to live campaign — no lengthy onboarding, no guesswork.', href: '/how-it-works', cta: 'See the process →' },
  { icon: '🏆', title: 'Client Results', desc: 'Real businesses, real numbers. See how our clients are driving higher open rates, more conversions, and faster growth.', href: '/results', cta: 'Read the stories →' },
  { icon: '📰', title: 'Insights', desc: 'Free articles, guides, and tips on email marketing, SMS, ad creative, and marketing automation — straight from our team.', href: '/insights', cta: 'Read the blog →' },
  { icon: '💬', title: 'Contact Us', desc: "Ready to talk? Book a free 30-minute strategy session or send us a message. We'll get back to you within one business day.", href: '/contact', cta: 'Get in touch →' },
  { icon: '🤝', title: 'Constant Contact Partner', desc: 'As an authorized reseller, we give you access to enterprise-tier features at small-business pricing with full onboarding support.', href: '/contact', cta: 'Learn about reselling →' },
];

export default function Home() {
  return (
    <>
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        .teasers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .teasers-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .teasers-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* HERO */}
      <section style={{background:'var(--sand)',position:'relative',overflow:'hidden',padding:'80px 0 40px',display:'flex',alignItems:'center'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 70% 60% at 85% 40%, rgba(245,166,35,0.18) 0%, transparent 65%), radial-gradient(
