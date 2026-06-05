'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
import MetricCards from '@/components/MetricCards';

const teasers = [
  {
    title: 'Services',
    headerBg: 'linear-gradient(135deg,#e8552a,#c9460f)',
    icon: (
      <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M6 7h4M6 11h8"/>
      </svg>
    ),
    back: 'Every Channel. One Trusted Partner.',
    desc: 'Marketing automation, SMS, social campaigns, ad creative, website builds, and event marketing.',
    href: '/services',
    cta: 'See all services',
  },
  {
    title: 'How It Works',
    headerBg: 'linear-gradient(135deg,#f5a623,#e07b3a)',
    icon: (
      <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="5" height="5" rx="1"/>
        <rect x="16" y="3" width="5" height="5" rx="1"/>
        <rect x="9.5" y="16" width="5" height="5" rx="1"/>
        <path d="M5.5 8v3c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2V8"/>
        <path d="M12 13v3"/>
      </svg>
    ),
    back: 'From Discovery to Launch in 4 Steps',
    desc: 'No guesswork. No lengthy onboarding. Campaigns live within days with full transparency.',
    href: '/how-it-works',
    cta: 'See the process',
  },
  {
    title: 'Client Results',
    headerBg: 'linear-gradient(135deg,#c9460f,#a83a0a)',
    icon: (
      <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    back: 'Real Businesses. Real Growth.',
    desc: 'See how our clients are driving higher open rates, more conversions, and faster growth.',
    href: '/results',
    cta: 'Read the stories',
  },
  {
    title: 'Insights',
    headerBg: 'linear-gradient(135deg,#fbbf47,#f5a623)',
    icon: (
      <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 6H9c-1.5-1.5-3-3.5-3-6a6 6 0 0 1 6-6z"/>
        <path d="M9 17h6"/>
      </svg>
    ),
    back: 'Marketing Intelligence, Delivered Free',
    desc: 'Free articles, guides, and tips on email marketing, SMS, ad creative, and automation.',
    href: '/insights',
    cta: 'Read the blog',
  },
  {
    title: 'Contact Us',
    headerBg: 'linear-gradient(135deg,#e8552a,#fbbf47)',
    icon: (
      <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 10h8M8 14h5"/>
      </svg>
    ),
    back: 'Lets Talk About Your Growth',
    desc: 'Book a free 30-minute strategy session. No obligation, no hard sell, just an honest conversation.',
    href: '/contact',
    cta: 'Get in touch',
  },
  {
    title: 'Constant Contact Partner',
    headerBg: 'linear-gradient(135deg,#a83a0a,#c9460f)',
    icon: (
      <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    back: 'Enterprise Features at Small Business Pricing',
    desc: 'As an authorized reseller, we give you full onboarding support and ongoing strategy included.',
    href: '/constant-contact',
    cta: 'Learn about reselling',
  },
];

export default function Home() {
  const router = useRouter();
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  function handleCardClick(index: number, href: string) {
    if (flippedIndex === index) {
      router.push(href);
    } else {
      setFlippedIndex(index);
    }
  }

  return (
    <>
      <style>{`
        .teasers-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .hero-btns { display:flex; gap:14px; flex-wrap:wrap; align-items:center; }
        .flip-card { perspective:1000px; cursor:pointer; height:260px; }
        .flip-card-inner { position:relative; width:100%; height:100%; transition:transform 0.6s; transform-style:preserve-3d; }
        .flip-card:hover .flip-card-inner, .flip-card.flipped .flip-card-inner { transform:rotateY(180deg); }
        .flip-card-front, .flip-card-back { position:absolute; width:100%; height:100%; backface-visibility:hidden; border-radius:18px; overflow:hidden; border:1px solid rgba(0,0,0,0.07); }
        .flip-card-front { background:var(--white); display:flex; flex-direction:column; }
        .flip-card-header { display:flex; align-items:center; justify-content:center; height:160px; flex-shrink:0; }
        .flip-card-label { padding:14px 16px; text-align:center; }
        .flip-card-back { background:var(--coral); transform:rotateY(180deg); display:flex; flex-direction:column; align-items:center; justify-content:center; padding:24px; text-align:center; gap:12px; }
        .flip-cta { background:white; color:#1a1208; font-family:Syne,sans-serif; font-size:0.82rem; font-weight:700; padding:8px 20px; border-radius:8px; display:inline-block; margin-top:4px; }
        @media(max-width:900px) { .teasers-grid { grid-template-columns:repeat(2,1fr); } }
        @media(max-width:560px) { .teasers-grid { grid-template-columns:1fr; } .hero-btns { flex-direction:column; align-items:stretch; } .hero-btns .btn { text-align:center; } }
      `}</style>

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
            Full-service marketing platform consulting and campaign execution - from email automation and SMS campaigns to ad creative, social media, and event marketing.
          </p>
          <div className="hero-btns">
            <Link href="/services" className="btn btn-primary">Explore Services</Link>
            <Link href="/how-it-works" className="btn btn-outline">See How It Works</Link>
          </div>
          <p style={{fontSize:'0.8rem',color:'var(--mid-gray)',marginTop:18}}>
            Constant Contact Authorized Partner - No long-term contracts
          </p>
        </div>
      </section>

      <div style={{background:'var(--sand)',paddingTop:20,paddingBottom:40,position:'relative',minHeight:200}}>
  <div style={{position:'absolute',left:0,top:0,bottom:0,width:200,background:'linear-gradient(to right, var(--sand), transparent)',zIndex:10,pointerEvents:'none'}}/>
  <div style={{position:'absolute',right:0,top:0,bottom:0,width:200,background:'linear-gradient(to left, var(--sand), transparent)',zIndex:10,pointerEvents:'none'}}/>
  <div style={{display:'flex',justifyContent:'center',alignItems:'center',overflow:'hidden'}}>
    <MetricCards />
  </div>
</div>

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

      <div style={{padding:'72px 0',background:'var(--cream)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:48}}>
            <span className="section-label">Everything You Need</span>
            <h2 className="section-title">One Partner. Every Channel.</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Hover over each card to explore what SignalForge can do for your business.</p>
          </div>
          <div className="teasers-grid">
            {teasers.map((t, i) => (
              <div
                key={t.title}
                className={`flip-card${flippedIndex === i ? ' flipped' : ''}`}
                onClick={() => handleCardClick(i, t.href)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="flip-card-header" style={{background:t.headerBg}}>
                      {t.icon}
                    </div>
                    <div className="flip-card-label">
                      <div style={{fontFamily:'Syne,sans-serif',fontSize:'1rem',fontWeight:700,color:'var(--text)'}}>{t.title}</div>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div style={{fontFamily:'Syne,sans-serif',fontSize:'1rem',fontWeight:800,color:'white',lineHeight:1.3}}>{t.back}</div>
                    <p style={{fontSize:'0.84rem',color:'rgba(255,255,255,0.85)',lineHeight:1.6,margin:0}}>{t.desc}</p>
                    <div className="flip-cta">{t.cta} →</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBand
        heading="Let's Start a Conversation"
        sub="Book a free 30-minute strategy session and find out exactly how SignalForge can help your business grow."
        primaryLabel="Schedule a Free Call"
        secondaryLabel="Explore Services"
      />
    </>
  );
}