import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = { title: 'Home' };

const teasers = [
  { icon: '⚡', title: 'Services', desc: 'Marketing automation, SMS, social campaigns, ad creative, website builds, and event marketing — all under one roof.', href: '/services', cta: 'See all services →' },
  { icon: '🗺️', title: 'How It Works', desc: 'A straightforward four-step process from discovery call to live campaign — no lengthy onboarding, no guesswork.', href: '/how-it-works', cta: 'See the process →' },
  { icon: '🏆', title: 'Client Results', desc: 'Real businesses, real numbers. See how our clients are driving higher open rates, more conversions, and faster growth.', href: '/results', cta: 'Read the stories →' },
  { icon: '📰', title: 'Insights', desc: 'Free articles, guides, and tips on email marketing, SMS, ad creative, and marketing automation — straight from our team.', href: '/insights', cta: 'Read the blog →' },
  { icon: '💬', title: 'Contact Us', desc: 'Ready to talk? Book a free 30-minute strategy session or send us a message. We\'ll get back to you within one business day.', href: '/contact', cta: 'Get in touch →' },
  { icon: '🤝', title: 'Constant Contact Partner', desc: 'As an authorized reseller, we give you access to enterprise-tier features at small-business pricing with full onboarding support.', href: '/contact', cta: 'Learn about reselling →' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{background:'var(--sand)',position:'relative',overflow:'hidden',padding:'100px 0 90px',minHeight:'620px',display:'flex',alignItems:'center'}}>
        <div style={{content:'',position:'absolute',inset:0,background:'radial-gradient(ellipse 70% 60% at 85% 40%, rgba(245,166,35,0.18) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 5% 90%, rgba(232,85,42,0.1) 0%, transparent 60%)',pointerEvents:'none'}} />
        <div className="container" style={{position:'relative',zIndex:2}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
            <div>
              <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(255,255,255,0.75)',border:'1px solid rgba(232,85,42,0.25)',borderRadius:50,padding:'6px 16px',fontSize:'0.8rem',color:'var(--coral)',fontWeight:600,marginBottom:24}}>
                Marketing Automation + Digital Growth
              </div>
              <h1 style={{fontSize:'clamp(2.4rem,4.5vw,3.6rem)',fontWeight:800,color:'var(--text)',marginBottom:22,lineHeight:1.1}}>
                Reach More Customers.{' '}
                <em style={{fontStyle:'normal',color:'var(--coral)'}}>Automate Smarter.</em>{' '}
                Grow Faster.
              </h1>
              <p style={{fontSize:'1.1rem',color:'var(--text-light)',lineHeight:1.75,marginBottom:36,maxWidth:480}}>
                Full-service marketing platform consulting and campaign execution — from email automation and SMS campaigns to ad creative, social media, and event marketing.
              </p>
              <div style={{display:'flex',gap:14,flexWrap:'wrap',alignItems:'center'}}>
                <Link href="/services" className="btn btn-primary">Explore Services</Link>
                <Link href="/how-it-works" className="btn btn-outline">See How It Works</Link>
              </div>
              <p style={{fontSize:'0.8rem',color:'var(--mid-gray)',marginTop:18}}>
                ✓ Constant Contact Authorized Partner &nbsp;·&nbsp; ✓ No long-term contracts
              </p>
            </div>
            {/* Floating metric cards */}
            <div style={{position:'relative',display:'flex',justifyContent:'center'}}>
              <div style={{position:'relative',width:380,height:320}}>
                {[
                  {icon:'📧',title:'Email Open Rate',val:'38.4%',label:'vs. 21% industry avg',top:0,left:0,width:280,delay:'0s'},
                  {icon:'📱',title:'SMS Click-Through',val:'22%',label:'Last 30-day campaign',bottom:0,right:0,width:260,delay:'1.5s'},
                  {icon:'🎯',title:'Lead Conversions',val:'+3.1×',label:'Automated vs. manual',width:240,delay:'3s',centered:true},
                ].map((card, i) => (
                  <div key={i} style={{
                    position:'absolute',background:'var(--white)',border:'1px solid rgba(232,85,42,0.12)',
                    borderRadius:18,boxShadow:'0 8px 32px rgba(180,80,30,0.1)',padding:'22px 24px',
                    width:card.width,
                    top: card.centered ? '50%' : card.top,
                    left: card.centered ? '50%' : card.left,
                    bottom: card.bottom,
                    right: card.right,
                    transform: card.centered ? 'translate(-50%,-50%)' : undefined,
                    animation:`floatCard 6s ease-in-out ${card.delay} infinite`,
                  }}>
                    <div style={{fontSize:'1.5rem',marginBottom:8}}>{card.icon}</div>
                    <div style={{fontFamily:'Syne,sans-serif',fontSize:'0.85rem',fontWeight:700,color:'var(--text)',marginBottom:4}}>{card.title}</div>
                    <div style={{fontSize:'1.6rem',fontWeight:700,fontFamily:'Syne,sans-serif',color:'var(--coral)'}}>{card.val}</div>
                    <div style={{fontSize:'0.72rem',color:'var(--mid-gray)',marginTop:2}}>{card.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`@keyframes floatCard{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}`}</style>
      </section>

      {/* LOGOS */}
      <div style={{background:'var(--white)',padding:'36px 0',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>
        <div className="container">
          <div style={{display:'flex',alignItems:'center',gap:40,flexWrap:'wrap',justifyContent:'center'}}>
            <span style={{fontSize:'0.8rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',color:'var(--mid-gray)'}}>Platforms we work with</span>
            {[['#e8552a','Constant Contact'],['#f5a623','Mailchimp'],['#e07b3a','HubSpot'],['#d44420','Klaviyo'],['#c9460f','Meta Ads'],['#a83a0a','LinkedIn']].map(([color, name]) => (
              <div key={name} style={{display:'flex',alignItems:'center',gap:8,padding:'8px 20px',background:'var(--sand)',borderRadius:50,border:'1px solid rgba(0,0,0,0.07)',fontFamily:'Syne,sans-serif',fontSize:'0.82rem',fontWeight:700,color:'var(--text-light)'}}>
                <span style={{width:8,height:8,borderRadius:'50%',background:color,display:'inline-block'}}/>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION TEASERS */}
      <div style={{padding:'90px 0',background:'var(--cream)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:56}}>
            <span className="section-label">Everything You Need</span>
            <h2 className="section-title">One Partner. Every Channel.</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Explore what SignalForge can do for your business — from automation to creative to live events.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
            {teasers.map(t => (
              <div key={t.title} style={{background:'var(--white)',border:'1px solid rgba(0,0,0,0.07)',borderRadius:18,padding:'32px 28px',textAlign:'center',transition:'var(--transition)'}}>
                <div style={{fontSize:'2.5rem',marginBottom:16}}>{t.icon}</div>
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'1.1rem',fontWeight:700,color:'var(--text)',marginBottom:10}}>{t.title}</div>
                <p style={{fontSize:'0.9rem',color:'var(--warm-gray)',lineHeight:1.65,marginBottom:18}}>{t.desc}</p>
                <Link href={t.href} style={{fontFamily:'Syne,sans-serif',fontSize:'0.85rem',fontWeight:700,color:'var(--coral)'}}>{t.cta}</Link>
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
