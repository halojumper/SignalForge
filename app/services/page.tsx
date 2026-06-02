import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
export const metadata: Metadata = { title: 'Services' };

const services = [
  { icon:'⚡', title:'Marketing Automation', featured:true, desc:'Design and deploy full lifecycle automation built on Constant Contact and other leading platforms.', bullets:['Welcome and onboarding sequences','Nurture and re-engagement drips','Triggered behavioral campaigns','List segmentation and tagging','A/B testing and optimization'] },
  { icon:'📱', title:'SMS Marketing', desc:'Launch text message campaigns that cut through the noise with 90%+ open rates.', bullets:['Campaign strategy and copywriting','Audience segmentation','Compliance setup (TCPA/CAN-SPAM)','Real-time analytics and reporting','Automated drip sequences'] },
  { icon:'📣', title:'Social Media Campaigns', desc:'End-to-end social campaign planning, content creation, scheduling, and paid promotion.', bullets:['Content calendar and strategy','Copywriting and graphic design','Instagram, Facebook, LinkedIn, X','Paid social campaign management','Monthly performance reporting'] },
  { icon:'🎨', title:'Ad Creative Design', desc:'Scroll-stopping creative for paid search, display, and social — built for conversion, not just clicks.', bullets:['Static and animated display ads','Social ad creative (all formats)','Google Ads creative assets','Landing page design','Brand consistency review'] },
  { icon:'🌐', title:'Website Design & Build', desc:'Modern, mobile-first websites that serve as the hub of your marketing ecosystem.', bullets:['Custom responsive design','CRM and email platform integration','SEO-ready structure and meta','Contact forms and lead capture','Analytics and conversion tracking'] },
  { icon:'🎟️', title:'Event Marketing', desc:'Promote webinars, in-person events, and product launches with coordinated multi-channel campaigns.', bullets:['Pre-event email and SMS sequences','Registration page design','Social promotion and paid ads','Reminder and follow-up automation','Post-event nurture campaigns'] },
];

export default function Services() {
  return (
    <>
      <style>{`
        .services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .platforms-row { display:flex; flex-wrap:wrap; justify-content:center; gap:12px; margin-top:28px; }
        @media(max-width:900px) {
          .services-grid { grid-template-columns:1fr 1fr; }
        }
        @media(max-width:560px) {
          .services-grid { grid-template-columns:1fr; }
        }
      `}</style>

      <div className="page-hero"><div className="container page-hero-inner">
        <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Services</span></div>
        <span className="section-label">What We Do</span>
        <h1>Every Channel. <em>One Trusted Partner.</em></h1>
        <p>From platform setup and automation workflows to creative production and live event promotion — we handle the full marketing picture.</p>
      </div></div>

      <section style={{padding:'56px 0 64px',background:'var(--cream)'}}>
        <div className="container">
          <div className="services-grid">
            {services.map(s=>(
              <div key={s.title} style={{border:'1px solid',borderColor:s.featured?'var(--coral)':'rgba(0,0,0,0.07)',borderRadius:18,padding:'32px 24px',background:s.featured?'var(--coral)':'var(--white)'}}>
                <div style={{width:48,height:48,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.4rem',marginBottom:18,background:s.featured?'rgba(255,255,255,0.2)':'rgba(232,85,42,0.1)'}}>{s.icon}</div>
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'1.05rem',fontWeight:700,color:s.featured?'var(--white)':'var(--text)',marginBottom:10}}>{s.title}</div>
                <p style={{fontSize:'0.9rem',color:s.featured?'rgba(255,255,255,0.75)':'var(--warm-gray)',lineHeight:1.7,marginBottom:14}}>{s.desc}</p>
                <ul style={{listStyle:'none',marginBottom:20}}>
                  {s.bullets.map(b=><li key={b} style={{fontSize:'0.86rem',color:s.featured?'rgba(255,255,255,0.75)':'var(--warm-gray)',padding:'4px 0',display:'flex',gap:8}}><span style={{color:s.featured?'var(--amber-lt)':'var(--coral)',fontWeight:700,flexShrink:0}}>✓</span>{b}</li>)}
                </ul>
                <Link href="/contact" style={{fontFamily:'Syne,sans-serif',fontSize:'0.85rem',fontWeight:700,color:s.featured?'var(--amber-lt)':'var(--coral)'}}>Get started →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{background:'var(--sand-mid)',padding:'56px 0'}}>
        <div className="container" style={{textAlign:'center'}}>
          <span className="section-label">Platforms We Work With</span>
          <h2 className="section-title">Tools We Know Inside and Out</h2>
          <div className="platforms-row">
            {['📧 Constant Contact','🐒 Mailchimp','🔶 HubSpot','🎯 Klaviyo','📘 Meta Ads','💼 LinkedIn Ads','🔍 Google Ads','📊 Google Analytics'].map(p=>(
              <div key={p} style={{display:'flex',alignItems:'center',gap:10,padding:'10px 20px',background:'var(--white)',border:'1px solid rgba(0,0,0,0.08)',borderRadius:50,fontFamily:'Syne,sans-serif',fontSize:'0.85rem',fontWeight:700}}>{p}</div>
            ))}
          </div>
        </div>
      </div>

      <CtaBand heading="Not Sure Which Service You Need?" sub="Book a free call and we'll map out the right combination of services for your goals and budget." secondaryLabel="See How It Works" secondaryHref="/how-it-works" />
    </>
  );
}