'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CtaBand from '@/components/CtaBand';
import MetricCards from '@/components/MetricCards';

const ServicesIllustration = () => (
  <svg viewBox="0 0 80 70" width="72" height="63" style={{display:'block'}}>
    <rect x="8" y="10" width="64" height="48" rx="5" fill="#fdf0e8"/>
    <rect x="8" y="10" width="64" height="13" rx="5" fill="#e8552a"/>
    <circle cx="17" cy="16.5" r="2" fill="rgba(255,255,255,0.7)"/>
    <circle cx="23" cy="16.5" r="2" fill="rgba(255,255,255,0.7)"/>
    <circle cx="29" cy="16.5" r="2" fill="rgba(255,255,255,0.7)"/>
    <rect x="18" y="44" width="8" height="12" rx="2" fill="#e8552a"/>
    <rect x="30" y="36" width="8" height="20" rx="2" fill="#f5a623"/>
    <rect x="42" y="29" width="8" height="27" rx="2" fill="#e8552a" opacity="0.6"/>
    <rect x="54" y="22" width="8" height="34" rx="2" fill="#fbbf47"/>
    <polyline points="22,44 34,36 46,29 58,22" fill="none" stroke="#c9460f" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HowItWorksIllustration = () => (
  <svg viewBox="0 0 80 70" width="72" height="63" style={{display:'block'}}>
    <circle cx="22" cy="22" r="12" fill="#e8552a"/>
    <text x="22" y="22" textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="white" fontFamily="sans-serif" fontWeight="bold">1</text>
    <line x1="34" y1="22" x2="44" y2="22" stroke="#e8552a" strokeWidth="2" strokeLinecap="round"/>
    <polygon points="44,19 50,22 44,25" fill="#e8552a"/>
    <circle cx="58" cy="22" r="12" fill="#f5a623"/>
    <text x="58" y="22" textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="white" fontFamily="sans-serif" fontWeight="bold">2</text>
    <line x1="58" y1="34" x2="58" y2="44" stroke="#f5a623" strokeWidth="2" strokeLinecap="round"/>
    <polygon points="55,44 58,50 61,44" fill="#f5a623"/>
    <circle cx="58" cy="56" r="12" fill="#c9460f"/>
    <text x="58" y="56" textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="white" fontFamily="sans-serif" fontWeight="bold">3</text>
    <line x1="46" y1="56" x2="36" y2="56" stroke="#fbbf47" strokeWidth="2" strokeLinecap="round"/>
    <polygon points="36,53 30,56 36,59" fill="#fbbf47"/>
    <circle cx="22" cy="56" r="12" fill="#fbbf47"/>
    <text x="22" y="56" textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="white" fontFamily="sans-serif" fontWeight="bold">4</text>
  </svg>
);

const ResultsIllustration = () => (
  <svg viewBox="0 0 80 70" width="72" height="63" style={{display:'block'}}>
    <path d="M26 8 h28 v24 a14 14 0 0 1 -28 0 Z" fill="#f5a623"/>
    <path d="M26 16 h-8 a7 7 0 0 0 8 12" fill="none" stroke="#fbbf47" strokeWidth="3" strokeLinecap="round"/>
    <path d="M54 16 h8 a7 7 0 0 1 -8 12" fill="none" stroke="#fbbf47" strokeWidth="3" strokeLinecap="round"/>
    <rect x="34" y="44" width="12" height="8" rx="1" fill="#e8552a"/>
    <rect x="28" y="52" width="24" height="5" rx="2.5" fill="#e8552a"/>
    <path d="M40 14 l2 6 h6 l-5 3.5 2 6 -5 -3.5 -5 3.5 2 -6 -5 -3.5 h6 Z" fill="white"/>
  </svg>
);

const InsightsIllustration = () => (
  <svg viewBox="0 0 80 70" width="72" height="63" style={{display:'block'}}>
    <circle cx="40" cy="28" r="16" fill="#fbbf47"/>
    <circle cx="34" cy="22" r="3" fill="rgba(255,255,255,0.4)"/>
    <rect x="34" y="42" width="12" height="4" rx="1" fill="#e8552a"/>
    <rect x="35" y="46" width="10" height="3" rx="1" fill="#e8552a" opacity="0.7"/>
    <rect x="36" y="49" width="8" height="3" rx="1" fill="#e8552a" opacity="0.4"/>
    <line x1="40" y1="6" x2="40" y2="2" stroke="#fbbf47" strokeWidth="2" strokeLinecap="round"/>
    <line x1="56" y1="12" x2="59" y2="9" stroke="#fbbf47" strokeWidth="2" strokeLinecap="round"/>
    <line x1="62" y1="28" x2="66" y2="28" stroke="#fbbf47" strokeWidth="2" strokeLinecap="round"/>
    <line x1="24" y1="12" x2="21" y2="9" stroke="#fbbf47" strokeWidth="2" strokeLinecap="round"/>
    <line x1="18" y1="28" x2="14" y2="28" stroke="#fbbf47" strokeWidth="2" strokeLinecap="round"/>
    <line x1="20" y1="60" x2="60" y2="60" stroke="#e8552a" strokeWidth="2" strokeLinecap="round"/>
    <line x1="25" y1="65" x2="55" y2="65" stroke="#e8552a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const ContactIllustration = () => (
  <svg viewBox="0 0 80 70" width="72" height="63" style={{display:'block'}}>
    <rect x="10" y="22" width="60" height="40" rx="5" fill="#e8552a"/>
    <path d="M10 27 L40 47 L70 27" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="10" y1="62" x2="28" y2="44" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="70" y1="62" x2="52" y2="44" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <rect x="28" y="4" width="24" height="14" rx="5" fill="#fbbf47"/>
    <polygon points="33,18 40,24 47,18" fill="#fbbf47"/>
    <line x1="32" y1="10" x2="48" y2="10" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="32" y1="14" x2="44" y2="14" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const PartnerIllustration = () => (
  <svg viewBox="0 0 80 70" width="72" height="63" style={{display:'block'}}>
    <circle cx="20" cy="18" r="8" fill="#e8552a"/>
    <path d="M8 42 C8 32 32 32 32 42" fill="#e8552a"/>
    <circle cx="60" cy="18" r="8" fill="#f5a623"/>
    <path d="M48 42 C48 32 72 32 72 42" fill="#f5a623"/>
    <ellipse cx="40" cy="50" rx="14" ry="8" fill="#fbbf47"/>
    <path d="M26 50 C26 42 54 42 54 50" fill="#f5a623"/>
    <circle cx="40" cy="28" r="9" fill="#c9460f"/>
    <path d="M35 28 l3.5 3.5 7 -7" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const teasers = [
  { illustration: <ServicesIllustration />, title: 'Services', back: 'Every Channel. One Trusted Partner.', desc: 'Marketing automation, SMS, social campaigns, ad creative, website builds, and event marketing.', href: '/services', cta: 'See all services' },
  { illustration: <HowItWorksIllustration />, title: 'How It Works', back: 'From Discovery to Launch in 4 Steps', desc: 'No guesswork. No lengthy onboarding. Campaigns live within days with full transparency.', href: '/how-it-works', cta: 'See the process' },
  { illustration: <ResultsIllustration />, title: 'Client Results', back: 'Real Businesses. Real Growth.', desc: 'See how our clients are driving higher open rates, more conversions, and faster growth.', href: '/results', cta: 'Read the stories' },
  { illustration: <InsightsIllustration />, title: 'Insights', back: 'Marketing Intelligence, Delivered Free', desc: 'Free articles, guides, and tips on email marketing, SMS, ad creative, and automation.', href: '/insights', cta: 'Read the blog' },
  { illustration: <ContactIllustration />, title: 'Contact Us', back: 'Lets Talk About Your Growth', desc: 'Book a free 30-minute strategy session. No obligation, no hard sell, just an honest conversation.', href: '/contact', cta: 'Get in touch' },
  { illustration: <PartnerIllustration />, title: 'Constant Contact Partner', back: 'Enterprise Features at Small Business Pricing', desc: 'As an authorized reseller, we give you full onboarding support and ongoing strategy included.', href: '/constant-contact', cta: 'Learn about reselling' },
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
        .flip-card { perspective:1000px; cursor:pointer; height:220px; }
        .flip-card-inner { position:relative; width:100%; height:100%; transition:transform 0.6s; transform-style:preserve-3d; }
        .flip-card:hover .flip-card-inner, .flip-card.flipped .flip-card-inner { transform:rotateY(180deg); }
        .flip-card-front, .flip-card-back { position:absolute; width:100%; height:100%; backface-visibility:hidden; border-radius:18px; border:1px solid rgba(0,0,0,0.07); }
        .flip-card-front { background:var(--white); display:flex; flex-direction:column; align-items:center; justify-content:center; padding:16px; text-align:center; }
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

      <div className="metric-cards-wrap" style={{background:'var(--sand)',paddingTop:20,paddingBottom:40,display:'flex',justifyContent:'center',alignItems:'center'}}>
        <MetricCards />
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
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:72,marginBottom:16}}>
                      {t.illustration}
                    </div>
                    <div style={{fontFamily:'Syne,sans-serif',fontSize:'1rem',fontWeight:700,color:'var(--text)'}}>{t.title}</div>
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