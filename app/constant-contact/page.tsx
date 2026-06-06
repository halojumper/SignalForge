'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import CtaBand from '@/components/CtaBand';

const features = [
  { icon: '📧', title: 'Email Marketing', desc: 'Professional templates, drag-and-drop builder, A/B testing, and advanced segmentation built for results.' },
  { icon: '📱', title: 'SMS Marketing', desc: 'Reach customers instantly with text message campaigns that average 90%+ open rates.' },
  { icon: '🤖', title: 'Marketing Automation', desc: 'Set up triggered workflows, drip sequences, and behavioral campaigns that run on autopilot.' },
  { icon: '📊', title: 'Reporting & Analytics', desc: 'Real-time dashboards showing opens, clicks, conversions, and revenue attribution.' },
  { icon: '📌', title: 'List Management', desc: 'Advanced segmentation, tagging, and contact management to keep your list clean and targeted.' },
  { icon: '🔗', title: 'Integrations', desc: 'Connect with Shopify, WordPress, Salesforce, QuickBooks, and hundreds of other tools.' },
];

const plans = [
  { name: 'Lite', price: '$12', period: '/mo', desc: 'Perfect for getting started with email marketing.', features: ['500 contacts', 'Email marketing', 'Basic templates', 'Reporting dashboard', 'SignalForge onboarding'] },
  { name: 'Standard', price: '$35', period: '/mo', desc: 'The most popular plan for growing businesses.', features: ['2,500 contacts', 'Everything in Lite', 'SMS marketing', 'Marketing automation', 'A/B testing', 'SignalForge setup & strategy'], featured: true },
  { name: 'Premium', price: '$80', period: '/mo', desc: 'Advanced features for scaling your marketing.', features: ['10,000 contacts', 'Everything in Standard', 'Advanced segmentation', 'Custom automations', 'Priority support', 'Monthly strategy calls'] },
];

const steps = [
  { num: '1', title: 'Book a Free Call', desc: 'We learn about your business, your goals, and which Constant Contact plan is the right fit.' },
  { num: '2', title: 'We Set Everything Up', desc: 'We handle the full account setup, domain authentication, list import, and template creation.' },
  { num: '3', title: 'Launch Your First Campaign', desc: 'We build and send your first campaign together so you can see results from day one.' },
  { num: '4', title: 'Ongoing Support', desc: 'Monthly strategy calls, performance reviews, and hands-on support whenever you need it.' },
];

const STATS = [
  { target: 600, suffix: 'K+', label: 'Businesses on Platform', numeric: true },
  { target: 97,  suffix: '%',  label: 'Deliverability Rate',    numeric: true },
  { target: 10,  suffix: 'B+', label: 'Emails Sent Monthly',    numeric: true },
  { target: 1,   suffix: '',   label: 'Rated Email Platform',   numeric: false },
];

function CCStats() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        STATS.forEach((s, i) => {
          if (!s.numeric) return;
          const duration = 1600;
          const steps = 50;
          const increment = s.target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current = Math.min(current + increment, s.target);
            setCounts(prev => {
              const next = [...prev];
              next[i] = Math.round(current);
              return next;
            });
            if (current >= s.target) clearInterval(interval);
          }, duration / steps);
        });
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="cc-stats-grid" ref={ref}>
      {STATS.map((s, i) => (
        <div key={s.label} style={{textAlign:'center',padding:'20px 16px',borderRight:i<3?'1px solid rgba(255,255,255,0.3)':undefined}}>
          <div style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(1.8rem,3vw,2.6rem)',fontWeight:800,color:'var(--white)',lineHeight:1,marginBottom:6}}>
            {s.numeric ? (
              <>{counts[i]}<span style={{color:'rgba(255,255,255,0.7)'}}>{s.suffix}</span></>
            ) : (
              <>#<span style={{color:'rgba(255,255,255,0.7))'}}>1</span></>
            )}
          </div>
          <div style={{fontSize:'0.85rem',color:'rgba(255,255,255,0.85)'}}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function ConstantContactPage() {
  return (
    <>
      <style>{`
        .cc-features-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .cc-plans-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .cc-steps-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:24px; }
        .cc-stats-grid { display:grid; grid-template-columns:repeat(4,1fr); }
        .cc-hero-btns { display:flex; gap:14px; flex-wrap:wrap; }
        @media(max-width:900px) {
          .cc-plans-grid { grid-template-columns:1fr; max-width:480px; margin:0 auto; }
        }
        @media(max-width:768px) {
          .cc-features-grid { grid-template-columns:1fr 1fr; }
          .cc-steps-grid { grid-template-columns:1fr; }
          .cc-stats-grid { grid-template-columns:1fr 1fr; }
        }
        @media(max-width:560px) {
          .cc-features-grid { grid-template-columns:1fr; }
          .cc-hero-btns { flex-direction:column; }
          .cc-hero-btns .btn { text-align:center; }
        }
      `}</style>

      {/* HERO */}
      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Constant Contact</span></div>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(232,85,42,0.08)',border:'1px solid rgba(232,85,42,0.2)',borderRadius:50,padding:'4px 14px',fontSize:'0.72rem',fontFamily:'Syne,sans-serif',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'var(--coral)',marginBottom:16}}>Authorized Reseller Partner</div>
          <h1>Get More From <em>Constant Contact</em></h1>
          <p>As an authorized Constant Contact reseller, SignalForge gives you access to enterprise-tier features, hands-on onboarding, and ongoing strategy support — all at small-business pricing.</p>
          <div className="cc-hero-btns" style={{marginTop:28}}>
            <Link href="/contact" className="btn btn-primary">Get Started Free</Link>
            <Link href="#features" className="btn btn-outline">See What's Included</Link>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{background:'var(--amber)',padding:'48px 0'}}>
        <div className="container">
          <CCStats />
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" style={{padding:'72px 0',background:'var(--cream)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:48}}>
            <span className="section-label">Platform Features</span>
            <h2 className="section-title">Everything You Need to Grow</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Constant Contact gives you a complete marketing toolkit — and SignalForge makes sure you actually use it.</p>
          </div>
          <div className="cc-features-grid">
            {features.map(f=>(
              <div key={f.title} style={{background:'var(--white)',borderRadius:18,padding:'28px 24px',border:'1px solid rgba(0,0,0,0.07)'}}>
                <div style={{fontSize:'2rem',marginBottom:16}}>{f.icon}</div>
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'1rem',fontWeight:700,color:'var(--text)',marginBottom:10}}>{f.title}</div>
                <p style={{fontSize:'0.9rem',color:'var(--warm-gray)',lineHeight:1.7}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{padding:'72px 0',background:'var(--sand)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:48}}>
            <span className="section-label">The Process</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>From your first call to your first campaign — we handle everything.</p>
          </div>
          <div className="cc-steps-grid">
            {steps.map(s=>(
              <div key={s.num} style={{background:'var(--white)',borderRadius:18,padding:'28px 24px',border:'1px solid rgba(0,0,0,0.07)',display:'flex',gap:18,alignItems:'flex-start'}}>
                <div style={{width:44,height:44,flexShrink:0,borderRadius:'50%',background:'var(--coral)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'1.1rem',color:'var(--white)'}}>{s.num}</div>
                <div>
                  <div style={{fontFamily:'Syne,sans-serif',fontSize:'1rem',fontWeight:700,color:'var(--text)',marginBottom:8}}>{s.title}</div>
                  <p style={{fontSize:'0.9rem',color:'var(--warm-gray)',lineHeight:1.7,margin:0}}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{padding:'72px 0',background:'var(--cream)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:48}}>
            <span className="section-label">Pricing</span>
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>All plans include SignalForge onboarding and setup at no extra cost.</p>
          </div>
          <div className="cc-plans-grid">
            {plans.map(p=>(
              <div key={p.name} style={{borderRadius:20,padding:'32px 28px',border:p.featured?'2px solid var(--coral)':'1px solid rgba(0,0,0,0.07)',background:p.featured?'var(--coral)':'var(--white)',position:'relative'}}>
                {p.featured && <div style={{position:'absolute',top:-14,left:'50%',transform:'translateX(-50%)',background:'var(--amber)',color:'var(--text)',fontFamily:'Syne,sans-serif',fontSize:'0.72rem',fontWeight:700,padding:'4px 16px',borderRadius:50,whiteSpace:'nowrap'}}>Most Popular</div>}
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'1.1rem',fontWeight:800,color:p.featured?'var(--white)':'var(--text)',marginBottom:8}}>{p.name}</div>
                <div style={{display:'flex',alignItems:'baseline',gap:4,marginBottom:12}}>
                  <span style={{fontFamily:'Syne,sans-serif',fontSize:'2.4rem',fontWeight:800,color:p.featured?'var(--white)':'var(--coral)'}}>{p.price}</span>
                  <span style={{fontSize:'0.88rem',color:p.featured?'rgba(255,255,255,0.7)':'var(--warm-gray)'}}>{p.period}</span>
                </div>
                <p style={{fontSize:'0.88rem',color:p.featured?'rgba(255,255,255,0.75)':'var(--warm-gray)',marginBottom:20,lineHeight:1.6}}>{p.desc}</p>
                <ul style={{listStyle:'none',marginBottom:28}}>
                  {p.features.map(f=>(
                    <li key={f} style={{fontSize:'0.88rem',color:p.featured?'rgba(255,255,255,0.85)':'var(--text)',padding:'6px 0',display:'flex',gap:10,borderBottom:`1px solid ${p.featured?'rgba(255,255,255,0.1)':'rgba(0,0,0,0.05)'}`}}>
                      <span style={{color:p.featured?'var(--amber-lt)':'var(--coral)',fontWeight:700,flexShrink:0}}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn" style={{display:'block',textAlign:'center',background:p.featured?'var(--white)':'var(--coral)',color:p.featured?'var(--coral)':'var(--white)',border:'2px solid transparent'}}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Ready to Get Started with Constant Contact?" sub="Book a free call and we will have your account set up and your first campaign live within 48 hours." primaryLabel="Book a Free Call" secondaryLabel="View All Services" secondaryHref="/services" />
    </>
  );
}
