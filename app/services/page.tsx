import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
export const metadata: Metadata = { title: 'Services' };

const AutomationIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="5" height="5" rx="1"/>
    <rect x="16" y="3" width="5" height="5" rx="1"/>
    <rect x="9.5" y="16" width="5" height="5" rx="1"/>
    <path d="M5.5 8v3c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2V8"/>
    <path d="M12 13v3"/>
  </svg>
);
const SmsIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="11" height="18" rx="2"/>
    <rect x="11" y="4" width="8" height="6" rx="1.5" fill="white" fillOpacity="0.25" stroke="white"/>
    <path d="M13 10l-1 2 3-2"/>
    <path d="M13 7h4M13 9h2"/>
  </svg>
);
const SocialIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/>
  </svg>
);
const AdIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/><circle cx="8.5" cy="15.5" r="2.5"/>
    <path d="M13.5 9v3.5m0 3.5V20M11 15.5H6m8.5 0H21"/>
  </svg>
);
const WebIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
  </svg>
);
const EventIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7H2Z"/>
    <path d="M6 7V5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v2"/>
  </svg>
);

const CheckIcon = () => (
  <div style={{width:20,height:20,minWidth:20,background:'var(--coral)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <svg viewBox="0 0 12 12" width="11" height="11"><path d="M2 6l3 3 5-5" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </div>
);

const services = [
  {
    id:'marketing-automation',
    icon:<AutomationIcon />,
    title:'Marketing Automation',
    stat:'3.4× avg ROI',
    desc:'Design and deploy full lifecycle automation built on Constant Contact and other leading platforms.',
    bullets:['Welcome and onboarding sequences','Nurture and re-engagement drips','Triggered behavioral campaigns','List segmentation and tagging','A/B testing and optimization'],
  },
  {
    id:'sms-marketing',
    icon:<SmsIcon />,
    title:'SMS Marketing',
    stat:'94% avg open rate',
    desc:'Launch text message campaigns that cut through the noise and reach customers instantly.',
    bullets:['Campaign strategy and copywriting','Audience segmentation','TCPA/CAN-SPAM compliance setup','Real-time analytics and reporting','Automated drip sequences'],
  },
  {
    id:'social-media',
    icon:<SocialIcon />,
    title:'Social Media Campaigns',
    stat:'5× reach increase',
    desc:'End-to-end social campaign planning, content creation, scheduling, and paid promotion.',
    bullets:['Content calendar and strategy','Copywriting and graphic design','Instagram, Facebook, LinkedIn, X','Paid social campaign management','Monthly performance reporting'],
  },
  {
    id:'ad-creative',
    icon:<AdIcon />,
    title:'Ad Creative Design',
    stat:'22% avg CTR',
    desc:'Scroll-stopping creative for paid search, display, and social - built for conversion, not just clicks.',
    bullets:['Static and animated display ads','Social ad creative (all formats)','Google Ads creative assets','Landing page design','Brand consistency review'],
  },
  {
    id:'website-design',
    icon:<WebIcon />,
    title:'Website Design & Build',
    stat:'3× more leads',
    desc:'Modern, mobile-first websites that serve as the hub of your marketing ecosystem.',
    bullets:['Custom responsive design','CRM and email platform integration','SEO-ready structure and meta','Contact forms and lead capture','Analytics and conversion tracking'],
  },
  {
    id:'event-marketing',
    icon:<EventIcon />,
    title:'Event Marketing',
    stat:'Sell out in 48h',
    desc:'Promote webinars, in-person events, and product launches with coordinated multi-channel campaigns.',
    bullets:['Pre-event email and SMS sequences','Registration page design','Social promotion and paid ads','Reminder and follow-up automation','Post-event nurture campaigns'],
  },
];

export default function Services() {
  return (
    <>
      <style>{`
        .services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .platforms-row { display:flex; flex-wrap:wrap; justify-content:center; gap:12px; margin-top:28px; }
        .service-card-header { background:#fdf0e8; padding:20px 24px; display:flex; align-items:center; gap:14px; }
        .service-card-body { padding:20px 24px; flex:1; display:flex; flex-direction:column; }
        @media(max-width:900px) { .services-grid { grid-template-columns:1fr 1fr; } }
        @media(max-width:560px) { .services-grid { grid-template-columns:1fr; } }
      `}</style>

      <div className="page-hero"><div className="container page-hero-inner">
        <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Services</span></div>
        <span className="section-label">What We Do</span>
        <h1>Every Channel. <em>One Trusted Partner.</em></h1>
        <p>From platform setup and automation workflows to creative production and live event promotion - we handle the full marketing picture.</p>
      </div></div>

      <section style={{padding:'56px 0 64px',background:'var(--cream)'}}>
        <div className="container">
          <div className="services-grid">
            {services.map(s=>(
              <div key={s.id} id={s.id} style={{background:'var(--white)',border:'1px solid rgba(0,0,0,0.07)',borderRadius:18,overflow:'hidden',display:'flex',flexDirection:'column',scrollMarginTop:'80px'}}>
                <div className="service-card-header">
                  <div style={{width:52,height:52,minWidth:52,background:'var(--coral)',borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    {s.icon}
                  </div>
                  <div>
                    <div style={{fontSize:'1rem',fontFamily:'Syne,sans-serif',fontWeight:700,color:'var(--text)',marginBottom:6}}>{s.title}</div>
                    <div style={{display:'inline-flex',alignItems:'center',background:'var(--coral)',borderRadius:20,padding:'3px 12px'}}>
                      <span style={{fontSize:'0.72rem',fontWeight:700,color:'var(--white)',fontFamily:'Syne,sans-serif'}}>{s.stat}</span>
                    </div>
                  </div>
                </div>
                <div className="service-card-body">
                  <p style={{fontSize:'0.9rem',color:'var(--warm-gray)',lineHeight:1.7,marginBottom:18}}>{s.desc}</p>
                  <div style={{display:'flex',flexDirection:'column',gap:14,marginBottom:24}}>
                    {s.bullets.map(b=>(
                      <div key={b} style={{display:'flex',gap:12,alignItems:'center',fontSize:'0.88rem',color:'var(--text)'}}>
                        <CheckIcon />
                        {b}
                      </div>
                    ))}
                  </div>
                  <div style={{marginTop:'auto',paddingTop:16,borderTop:'1px solid rgba(0,0,0,0.06)'}}>
                    <Link href="/contact" style={{fontFamily:'Syne,sans-serif',fontSize:'0.88rem',fontWeight:700,color:'var(--coral)'}}>Get started →</Link>
                  </div>
                </div>
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
            {['Constant Contact','Mailchimp','HubSpot','Klaviyo','Meta Ads','LinkedIn Ads','Google Ads','Google Analytics'].map(p=>(
              <div key={p} style={{display:'flex',alignItems:'center',gap:10,padding:'10px 20px',background:'var(--white)',border:'1px solid rgba(0,0,0,0.08)',borderRadius:50,fontFamily:'Syne,sans-serif',fontSize:'0.85rem',fontWeight:700}}>{p}</div>
            ))}
          </div>
        </div>
      </div>

      <CtaBand heading="Not Sure Which Service You Need?" sub="Book a free call and we will map out the right combination of services for your goals and budget." secondaryLabel="See How It Works" secondaryHref="/how-it-works" />
    </>
  );
}