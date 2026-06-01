import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Constant Contact — Our Platform of Choice',
  description: 'Why SignalForge recommends and resells Constant Contact — the all-in-one marketing platform built for small and mid-sized businesses.',
};

const features = [
  {
    icon: '📧',
    title: 'Email Marketing',
    desc: 'Build and send professional email campaigns in minutes. Choose from hundreds of mobile-optimized templates, customize with a drag-and-drop editor, and let AI branding tools automatically match your colors and style. Schedule sends, preview across devices, and automatically resend to contacts who didn\'t open the first time.',
    bullets: ['200+ customizable email templates', 'Drag-and-drop email builder', 'AI-powered branding and content tools', 'Mobile preview and optimization', 'Automatic resend to non-openers'],
  },
  {
    icon: '⚡',
    title: 'Marketing Automation',
    desc: 'Set up automated email and SMS sequences that run on their own — welcoming new subscribers, following up after purchases, re-engaging cold contacts, and nurturing leads through every stage of your funnel. Constant Contact\'s automation builder is widely regarded as one of the most intuitive on the market.',
    bullets: ['Welcome and onboarding sequences', 'Triggered campaigns based on behavior', 'Drip series and nurture flows', 'Birthday and anniversary automations', 'Re-engagement campaigns for cold lists'],
  },
  {
    icon: '📱',
    title: 'SMS Marketing',
    desc: 'Reach your audience where they\'re most responsive — their phones. SMS messages through Constant Contact complement your email campaigns and are perfect for time-sensitive offers, event reminders, and flash promotions. With open rates above 90%, SMS is one of the highest-ROI channels available.',
    bullets: ['Standalone and integrated SMS campaigns', 'Two-way messaging support', 'Audience segmentation for SMS lists', 'Automated SMS sequences', 'TCPA-compliant opt-in management'],
  },
  {
    icon: '🎟️',
    title: 'Event Marketing',
    desc: 'Constant Contact has some of the strongest event marketing tools of any platform in its category. Create an event, build a registration page, set up automated reminder and follow-up emails, manage attendees, and even collect payments via PayPal or Stripe — all in one place.',
    bullets: ['Event landing page builder', 'Customizable registration forms', 'Ticket sales via PayPal and Stripe', 'Automated attendee reminders', 'Post-event follow-up campaigns'],
  },
  {
    icon: '📣',
    title: 'Social Media & Ads',
    desc: 'Extend your reach beyond email and SMS. Constant Contact lets you schedule and publish posts across Facebook, Instagram, and other platforms directly from your dashboard. You can also sync your contact list to Facebook Ads to run targeted campaigns that reach audiences similar to your existing customers.',
    bullets: ['Social post scheduling and publishing', 'Facebook and Instagram ad creation', 'Lookalike audience targeting via contact sync', 'Social reporting and engagement tracking', 'Google Ads integration'],
  },
  {
    icon: '🌐',
    title: 'Landing Pages & Sign-Up Forms',
    desc: 'Grow your contact list without a website. Constant Contact\'s landing page builder lets you create standalone pages for lead capture, event registration, or promotions. Embed sign-up forms anywhere, set up pop-ups, and watch your list grow automatically — all leads flow straight into your contact database.',
    bullets: ['Drag-and-drop landing page builder', 'Embeddable sign-up forms', 'Pop-up and inline form options', 'Lead capture with automatic list tagging', 'Form analytics and conversion tracking'],
  },
  {
    icon: '👥',
    title: 'Contact Management & Segmentation',
    desc: 'A marketing platform is only as good as the list it sits on. Constant Contact gives you robust tools to organize, tag, and segment your contacts so every message reaches the right person. Import from spreadsheets, CRMs, or other platforms — and keep your list clean with automatic bounce and unsubscribe handling.',
    bullets: ['Unlimited contact tags and segments', 'Import from CSV, Excel, CRM, or Salesforce', 'Automatic bounce and unsubscribe management', 'Contact activity and engagement scoring', 'List growth tracking over time'],
  },
  {
    icon: '📊',
    title: 'Reporting & Analytics',
    desc: 'Know exactly what\'s working. Constant Contact\'s reporting dashboard gives you real-time visibility into open rates, click rates, unsubscribes, bounces, and revenue driven by each campaign. Track performance across email, SMS, and social from a single view and use the data to keep improving.',
    bullets: ['Real-time campaign performance dashboard', 'Open, click, and bounce rate tracking', 'Revenue attribution per campaign', 'A/B testing for subject lines and content', 'Integrates with Google Analytics'],
  },
];

const plans = [
  {
    name: 'Lite',
    ideal: 'Just getting started',
    color: 'var(--sand-mid)',
    textColor: 'var(--text)',
    featured: false,
    highlights: ['Email marketing', '1 user', 'Basic templates', 'Sign-up forms', 'Monthly sends: 10× contact count'],
  },
  {
    name: 'Standard',
    ideal: 'Growing businesses',
    color: 'var(--coral)',
    textColor: 'white',
    featured: true,
    highlights: ['Everything in Lite', 'SMS marketing', 'Automation workflows', 'A/B testing', 'Schedule send', '3 users'],
  },
  {
    name: 'Premium',
    ideal: 'Scaling operations',
    color: 'var(--sand-mid)',
    textColor: 'var(--text)',
    featured: false,
    highlights: ['Everything in Standard', 'Advanced automation', 'Google Ads integration', 'Custom coded templates', 'Unlimited users', 'Priority support'],
  },
];

const whyReseller = [
  { icon: '🚀', title: 'Faster Setup', desc: 'We configure your account, authenticate your domain, import your list, and build your first automation — so you\'re live in days, not weeks.' },
  { icon: '🎨', title: 'Branded Templates', desc: 'We design email and SMS templates that match your brand before you send a single campaign. No generic defaults.' },
  { icon: '🧠', title: 'Strategy Included', desc: 'You\'re not just buying software — you\'re getting a partner who helps you figure out what to send, when, and to whom.' },
  { icon: '💰', title: 'Better Pricing', desc: 'As an authorized reseller, we can offer access to Constant Contact at competitive rates with our services bundled in.' },
  { icon: '📞', title: 'Ongoing Support', desc: 'Stuck on a campaign? Have a question about automation logic? We\'re your first call — not a generic support queue.' },
  { icon: '📈', title: 'Results Accountability', desc: 'We track your open rates, click rates, and revenue attribution and report back to you monthly. We\'re invested in your results.' },
];

export default function ConstantContactPage() {
  return (
    <>
      {/* HERO */}
      <div style={{ background: 'var(--sand)', padding: '72px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 90% 50%, rgba(245,166,35,0.16) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(232,85,42,0.06) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8rem', color: 'var(--mid-gray)', marginBottom: 20, fontFamily: 'Syne,sans-serif' }}>
            <Link href="/" style={{ color: 'var(--coral)' }}>Home</Link>
            <span>›</span><span>Constant Contact</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--white)', border: '1px solid rgba(232,85,42,0.2)', borderRadius: 50, padding: '8px 20px', marginBottom: 28, boxShadow: '0 2px 12px rgba(180,80,30,0.08)' }}>
            <span style={{ fontSize: '1.1rem' }}>🤝</span>
            <span style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.82rem', fontWeight: 700, color: 'var(--coral)' }}>SignalForge — Authorized Constant Contact Reseller</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)', fontWeight: 800, color: 'var(--text)', marginBottom: 20, lineHeight: 1.1, maxWidth: 700 }}>
            The All-in-One Marketing Platform{' '}
            <em style={{ fontStyle: 'normal', color: 'var(--coral)' }}>Built for Business Growth</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', maxWidth: 620, lineHeight: 1.75, marginBottom: 32 }}>
            Constant Contact gives small and mid-sized businesses everything they need to market smarter — email, SMS, automation, social, events, and more — in one intuitive platform. As an authorized reseller, SignalForge sets it all up for you and makes sure it actually works.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Get Set Up With Us</Link>
            <a href="https://www.constantcontact.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Visit Constant Contact ↗</a>
          </div>
        </div>
      </div>

      {/* QUICK STATS */}
      <div style={{ background: 'var(--coral)', padding: '48px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
            {[
              { val: '600K+', label: 'Businesses worldwide' },
              { val: '200+', label: 'Email templates' },
              { val: '7,000+', label: 'App integrations' },
              { val: '30+', label: 'Years in market' },
            ].map((s, i) => (
              <div key={s.label} style={{ textAlign: 'center', padding: '24px 20px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.25)' : undefined }}>
                <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '2.4rem', fontWeight: 800, color: 'var(--white)', lineHeight: 1, marginBottom: 6 }}>{s.val}</div>
                <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section style={{ padding: '90px 0', background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="section-label">Platform Features</span>
            <h2 className="section-title">Everything in One Place</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Constant Contact covers every channel you need to grow — and SignalForge handles the setup, strategy, and ongoing execution.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }}>
            {features.map((f, i) => (
              <div key={f.title} style={{ background: 'var(--white)', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 20, padding: '32px 28px', display: 'flex', gap: 22, alignItems: 'flex-start' }}>
                <div style={{ width: 52, height: 52, flexShrink: 0, borderRadius: 14, background: i === 0 ? 'var(--coral)' : 'rgba(232,85,42,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>{f.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>{f.title}</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--warm-gray)', lineHeight: 1.7, marginBottom: 14 }}>{f.desc}</p>
                  <ul style={{ listStyle: 'none' }}>
                    {f.bullets.map(b => (
                      <li key={b} style={{ fontSize: '0.84rem', color: 'var(--warm-gray)', padding: '3px 0', display: 'flex', gap: 8 }}>
                        <span style={{ color: 'var(--coral)', fontWeight: 700, flexShrink: 0 }}>✓</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section style={{ padding: '90px 0', background: 'var(--sand)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Pricing Tiers</span>
            <h2 className="section-title">Plans for Every Stage of Growth</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Constant Contact offers three plans. We'll recommend the right one based on your list size, goals, and budget — and set it up for you.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {plans.map(p => (
              <div key={p.name} style={{ background: p.color, borderRadius: 20, padding: '36px 28px', border: p.featured ? 'none' : '1px solid rgba(0,0,0,0.07)', boxShadow: p.featured ? '0 16px 48px rgba(232,85,42,0.25)' : undefined, position: 'relative' }}>
                {p.featured && (
                  <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--amber)', color: 'var(--text)', fontFamily: 'Syne,sans-serif', fontSize: '0.72rem', fontWeight: 700, padding: '5px 16px', borderRadius: 50, whiteSpace: 'nowrap' }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '1.5rem', fontWeight: 800, color: p.textColor, marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontSize: '0.82rem', color: p.featured ? 'rgba(255,255,255,0.75)' : 'var(--warm-gray)', marginBottom: 24 }}>{p.ideal}</div>
                <ul style={{ listStyle: 'none' }}>
                  {p.highlights.map(h => (
                    <li key={h} style={{ fontSize: '0.88rem', color: p.featured ? 'rgba(255,255,255,0.85)' : 'var(--warm-gray)', padding: '6px 0', borderBottom: `1px solid ${p.featured ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)'}`, display: 'flex', gap: 8 }}>
                      <span style={{ color: p.featured ? 'var(--amber-lt)' : 'var(--coral)', fontWeight: 700, flexShrink: 0 }}>✓</span>{h}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" style={{ display: 'block', marginTop: 28, textAlign: 'center', padding: '12px', borderRadius: 50, fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.9rem', background: p.featured ? 'var(--white)' : 'var(--coral)', color: p.featured ? 'var(--coral)' : 'var(--white)' }}>
                  Get Started with {p.name}
                </Link>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--mid-gray)', marginTop: 24 }}>
            Pricing is based on contact list size.{' '}
            <Link href="/contact" style={{ color: 'var(--coral)', fontWeight: 600 }}>Contact us</Link> for a custom quote based on your specific needs.
          </p>
        </div>
      </section>

      {/* WHY SIGNALFORGE */}
      <section style={{ padding: '90px 0', background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Why Work With Us</span>
            <h2 className="section-title">Constant Contact Is Powerful.<br />We Make It Work{' '}
              <em style={{ fontStyle: 'normal', color: 'var(--coral)' }}>For You.</em>
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Anyone can sign up for Constant Contact directly. Here's what you get when you go through SignalForge instead.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {whyReseller.map(w => (
              <div key={w.title} style={{ background: 'var(--white)', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 18, padding: '32px 24px' }}>
                <div style={{ fontSize: '2rem', marginBottom: 16 }}>{w.icon}</div>
                <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>{w.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--warm-gray)', lineHeight: 1.7 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        label="Ready to Get Started?"
        heading="Let's Set Up Your Constant Contact Account"
        sub="Book a free call and we'll walk you through the right plan, set everything up, and have your first campaign live within days."
        primaryLabel="Book a Free Setup Call"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
    </>
  );
}