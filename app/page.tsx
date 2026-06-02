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
  { icon: '🤝', title: 'Constant Contact Partner', desc: 'As an authorized reseller, we give you access to enterprise-tier features at small-business pricing with full onboarding support.', href: '/constant-contact', cta: 'Learn about reselling →' },
];

export default function Home() {
  return (
    <>
      <style>{`
        .teasers-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .hero-btns { display:flex; gap:14px; flex-wrap:wrap; align-items:center; }
        @media(max-width:900px) { .teasers-grid { grid-template-columns:repeat(2,1fr); } }
        @media(max-width:560px) {
          .teasers-grid { grid-template-columns:1fr; }
          .hero-btns { flex-direction:column; align-items:stretch; }
          .hero-btns .btn { text-align:center; }
        }
      `}</style>

      {/* HERO */}
      <section style={{background:'var(--sand)',position:'relative',overflow:'hidden',padding:'80px 0 40px'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 70% 60% at 85% 40%, rgba(245,166,35,0.18) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 5% 90%, rgba(232,85,42,0.1) 0%, transparent 60%)',pointerEvents:'none'}} />
        <div className="container" style={{position:'relative',zIndex:2,width:'100%'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(255,255,255,0.75)',border:'1px solid rgba(232,85,42,0.25)',borderRadius:50,padding:'6px 16px',fontSize:'0.8rem',color:'var(--coral)',fontWeight:600,marginBottom:24}}>
            Marketing Automation + Digital Growth
          </div>
          <h1 style={{fontSize:'clamp(2rem,4.5vw,3.6rem)',fontWeight:800,color:'var(--text)',marginBottom:22,lineHeight:1.1}}>
            Reach More Customers.{' '}
            <em style={{fontStyle:'normal',color:'var(--coral)'}}>Automate Smarter.</em>{' '}
            Grow Faster.
          </h1>
          <p style={{fontSize:'1.05rem',color:'var(--text-light)',lineHeight:1.75,marginBottom:36,maxWidth:600}}>
            Full-service marketing platform consulting and campaign execution — from email automation and SMS campaigns to ad creative, social media, and event marketing.
          </p>
          <div className="hero-btns">
            <Link href="/services" className="btn btn-primary">Explore Services</Link>
            <Link href="/how-it-works" className="btn btn-outline">See How It Works</Link>
          </div>
          <p style={{fontSize:'0.8rem',color:'var(--mid-gray)',marginTop:18}}>
            ✓ Constant Contact Authorized Partner &nbsp;·&nbsp; ✓ No long-term contracts
          </p>
        </div>
      </section>

      {/* METRIC CARDS */}
      <div className="metric-cards-wrap" style={{background:'var(--sand)',paddingTop:20,paddingBottom:40,display:'flex',justifyContent:'center',alignItems:'center'}}>
        <MetricCards />
      </div>

      {/* LOGOS */}
      <div style={{background:'var(--white)',padding:'36px 0',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>
        <div className="container">
          <div style={{display:'flex',alignItems:'center',gap:16,flexWrap:'wrap',justifyContent:'center'}}>
            <span style={{fontSize:'0.8rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',color:'var(--mid-gray)',width:'100%',textAlign:'center'}}>Platforms we work with</span>
            {[['#e8552a','Constant Contact'],['#f5a623','Mailchimp'],['#e07b3a','HubSpot'],['#d44420','Klaviyo'],['#c9460f','Meta Ads'],['#a83a0a','LinkedIn']].map(([color, name]) => (
              <div key={name} style={{display:'flex',alignItems:'center',gap:8,padding:'8px 16px',background:'var(--sand)',borderRadius:50,border:'1px solid rgba(0,0,0,0.07)',fontFamily:'Syne,sans-serif',fontSize:'0.82rem',fontWeight:700,color:'var(--text-light)'}}>
                <span style={{width:8,height:8,borderRadius:'50%',background:color,display:'inline-block',flexShrink:0}}/>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION TEASERS */}
      <div style={{padding:'72px 0',background:'var(--cream)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:48}}>
            <span className="section-label">Everything You Need</span>
            <h2 className="section-title">One Partner. Every Channel.</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Explore what SignalForge can do for your business.</p>
