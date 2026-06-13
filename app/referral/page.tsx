import type { Metadata } from 'next';
import Link from 'next/link';
import ReferralForm from './ReferralForm';

export const metadata: Metadata = {
  title: 'Refer a Client — Earn 10%',
  description: 'Know a business that needs marketing automation, SMS, or digital marketing services? Refer them to SignalForge and earn 10% of their first contract value.',
};

const steps = [
  { num: '01', icon: '🤝', title: 'Make the Introduction', desc: 'Fill out the form below with your contact info and your referral\'s details. We\'ll take it from there.' },
  { num: '02', icon: '📞', title: 'We Do the Work', desc: 'We reach out, run the discovery call, and close the engagement. You don\'t have to lift a finger after the intro.' },
  { num: '03', icon: '💰', title: 'You Get Paid', desc: 'Once your referral signs a contract and makes their first payment, we send you 10% of the first contract value.' },
];

const qualifications = [
  'The referred business must be a new SignalForge client',
  'The referral must result in a signed contract worth at least $500',
  'Payment is made within 30 days of the client\'s first invoice being paid',
  'No limit on how many clients you can refer',
  'Referrals from existing SignalForge clients also qualify',
];

const idealClients = [
  { icon: '🏪', title: 'Local & Regional Businesses', desc: 'Restaurants, salons, fitness studios, retail — businesses that need to reach local customers consistently.' },
  { icon: '🎟️', title: 'Event-Driven Organizations', desc: 'Venues, breweries, nonprofits, promoters — anyone who needs to fill seats and drive registrations.' },
  { icon: '🛍️', title: 'eCommerce Brands', desc: 'Online stores that want to recover abandoned carts, build email lists, and drive repeat purchases.' },
  { icon: '🏢', title: 'Professional Services', desc: 'Consultants, agencies, law firms, realtors — businesses that rely on relationships and referrals.' },
];

export default function Referral() {
  return (
    <>
      <style>{`
        .referral-steps { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .ideal-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }
        .qual-list { list-style: none; display: grid; grid-template-columns: repeat(2,1fr); gap: 12px; }
        .referral-layout { display: grid; grid-template-columns: 1fr 1.4fr; gap: 56px; align-items: start; }
        @media(max-width:900px) {
          .referral-steps { grid-template-columns: 1fr; }
          .ideal-grid { grid-template-columns: repeat(2,1fr); }
          .qual-list { grid-template-columns: 1fr; }
          .referral-layout { grid-template-columns: 1fr; }
        }
        @media(max-width:600px) {
          .ideal-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>›</span><span>Refer a Client</span>
          </div>
          <span className="section-label">Referral Program</span>
          <h1>Refer a Client. <em>Earn 10%.</em></h1>
          <p>Know a business that could use marketing automation, SMS campaigns, or a new website? Send them our way — and earn 10% of their first contract value when they sign.</p>
          <div style={{display:'flex',gap:14,flexWrap:'wrap',marginTop:28}}>
            <a href="#referral-form" className="btn btn-primary">Submit a Referral</a>
            <a href="https://calendly.com/signalforge-marketing" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Book a Call First</a>
          </div>
        </div>
      </div>

      <section style={{padding:'72px 0',background:'var(--cream)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:48}}>
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Three Steps to Getting Paid</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Simple, transparent, and no paperwork beyond the initial introduction.</p>
          </div>
          <div className="referral-steps">
            {steps.map(s=>(
              <div key={s.num} style={{background:'var(--white)',border:'1px solid rgba(0,0,0,0.07)',borderRadius:20,padding:'32px 28px',textAlign:'center'}}>
                <div style={{fontSize:'2.5rem',marginBottom:16}}>{s.icon}</div>
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'0.72rem',fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--coral)',marginBottom:8}}>Step {s.num}</div>
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'1.1rem',fontWeight:700,color:'var(--text)',marginBottom:12}}>{s.title}</div>
                <p style={{fontSize:'0.92rem',color:'var(--warm-gray)',lineHeight:1.7}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'var(--coral)',padding:'72px 0'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:48}}>
            <span className="section-label" style={{background:'rgba(255,255,255,0.2)',color:'var(--amber-lt)'}}>Earning Potential</span>
            <h2 className="section-title" style={{color:'var(--white)'}}>What 10% Looks Like in Practice</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
            {[
              {label:'Website + Email Setup',value:'$750',earn:'$75',desc:'A small business website with email automation setup'},
              {label:'Full Marketing Package',value:'$2,500',earn:'$250',desc:'Email, SMS, social media, and automation setup'},
              {label:'Enterprise Engagement',value:'$5,000+',earn:'$500+',desc:'Multi-channel campaign management and strategy'},
            ].map(t=>(
              <div key={t.label} style={{background:'rgba(255,255,255,0.12)',borderRadius:18,padding:'28px 24px',textAlign:'center',border:'1px solid rgba(255,255,255,0.2)'}}>
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'0.82rem',fontWeight:700,color:'rgba(255,255,255,0.7)',marginBottom:8,textTransform:'uppercase',letterSpacing:'0.08em'}}>{t.label}</div>
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'1rem',fontWeight:600,color:'rgba(255,255,255,0.6)',marginBottom:4}}>Contract value: {t.value}</div>
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'2.2rem',fontWeight:800,color:'var(--amber-lt)',marginBottom:8}}>You earn: {t.earn}</div>
                <p style={{fontSize:'0.84rem',color:'rgba(255,255,255,0.65)',lineHeight:1.5}}>{t.desc}</p>
              </div>
            ))}
          </div>
          <p style={{textAlign:'center',fontSize:'0.84rem',color:'rgba(255,255,255,0.6)',marginTop:28}}>No cap on referrals. Refer as many clients as you like.</p>
        </div>
      </section>

      <section style={{padding:'72px 0',background:'var(--sand)'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:56,alignItems:'start'}}>
            <div>
              <span className="section-label">Ideal Referrals</span>
              <h2 className="section-title">Who We Work Best With</h2>
              <div className="ideal-grid" style={{marginTop:28}}>
                {idealClients.map(c=>(
                  <div key={c.title} style={{background:'var(--white)',borderRadius:14,padding:'20px 16px',border:'1px solid rgba(0,0,0,0.07)'}}>
                    <div style={{fontSize:'1.8rem',marginBottom:10}}>{c.icon}</div>
                    <div style={{fontFamily:'Syne,sans-serif',fontSize:'0.88rem',fontWeight:700,color:'var(--text)',marginBottom:6}}>{c.title}</div>
                    <p style={{fontSize:'0.8rem',color:'var(--warm-gray)',lineHeight:1.6}}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="section-label">Program Terms</span>
              <h2 className="section-title">How Referrals Qualify</h2>
              <ul className="qual-list" style={{marginTop:28}}>
                {qualifications.map(q=>(
                  <li key={q} style={{background:'var(--white)',borderRadius:12,padding:'14px 16px',border:'1px solid rgba(0,0,0,0.07)',display:'flex',gap:10,alignItems:'flex-start'}}>
                    <span style={{color:'var(--coral)',fontWeight:700,flexShrink:0,marginTop:2}}>✓</span>
                    <span style={{fontSize:'0.88rem',color:'var(--text-light)',lineHeight:1.6}}>{q}</span>
                  </li>
                ))}
              </ul>
              <p style={{fontSize:'0.82rem',color:'var(--mid-gray)',marginTop:16,lineHeight:1.6}}>Questions about the program? <a href="https://calendly.com/signalforge-marketing" target="_blank" rel="noopener noreferrer" style={{color:'var(--coral)',fontWeight:600}}>Book a quick call</a> and we'll walk you through it.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="referral-form" style={{padding:'72px 0',background:'var(--cream)'}}>
        <div className="container">
          <div className="referral-layout">
            <div style={{background:'linear-gradient(135deg,var(--coral) 0%,#d44420 55%,var(--terra) 100%)',borderRadius:24,padding:'36px 28px',position:'relative',overflow:'hidden'}}>
              <div style={{position:'relative',zIndex:2}}>
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'1.4rem',fontWeight:800,color:'var(--white)',marginBottom:10}}>Ready to Refer?</div>
                <p style={{fontSize:'0.92rem',color:'rgba(255,255,255,0.8)',lineHeight:1.7,marginBottom:28}}>Fill out the form and we'll reach out to your referral within one business day. We'll keep you in the loop every step of the way.</p>
                <div style={{display:'flex',flexDirection:'column',gap:16,marginBottom:28}}>
                  {[
                    {icon:'⚡',title:'Fast Follow-Up',desc:'We contact your referral within 1 business day'},
                    {icon:'🤝',title:'You Stay in Control',desc:'We\'ll update you when they sign'},
                    {icon:'💰',title:'Quick Payment',desc:'Paid within 30 days of their first invoice'},
                    {icon:'♾️',title:'No Limit',desc:'Refer as many clients as you like'},
                  ].map(i=>(
                    <div key={i.title} style={{display:'flex',alignItems:'flex-start',gap:12}}>
                      <div style={{width:36,height:36,flexShrink:0,background:'rgba(255,255,255,0.15)',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem'}}>{i.icon}</div>
                      <div>
                        <div style={{fontFamily:'Syne,sans-serif',fontSize:'0.88rem',fontWeight:700,color:'var(--white)',marginBottom:2}}>{i.title}</div>
                        <div style={{fontSize:'0.8rem',color:'rgba(255,255,255,0.7)'}}>{i.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{background:'rgba(255,255,255,0.12)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:12,padding:'14px 16px'}}>
                  <p style={{fontSize:'0.84rem',color:'rgba(255,255,255,0.85)',lineHeight:1.5}}>Prefer to make a personal introduction? Email us directly at <a href="mailto:hello@signalforge.marketing" style={{color:'var(--amber-lt)',fontWeight:600}}>hello@signalforge.marketing</a></p>
                </div>
              </div>
            </div>
            <ReferralForm />
          </div>
        </div>
      </section>
    </>
  );
}