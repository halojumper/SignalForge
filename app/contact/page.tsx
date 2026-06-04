import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from './ContactForm';
export const metadata: Metadata = { title: 'Contact' };

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const contactItems = [
  { icon: <EmailIcon />, label: 'Email Us', val: 'hello@signalforge.marketing' },
  { icon: <PhoneIcon />, label: 'Call Us', val: '(617) 555-0190' },
  { icon: <LocationIcon />, label: 'Based In', val: 'Greater Boston, MA' },
  { icon: <ClockIcon />, label: 'Business Hours', val: 'Mon – Fri, 9am – 6pm ET' },
  { icon: <BoltIcon />, label: 'Response Time', val: 'Within 1 business day' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', val: 'SignalForge.Marketing', link: 'https://www.linkedin.com/company/signalforgemarketing/' },
];

export default function Contact() {
  return (
    <>
      <style>{`
        .contact-grid { display:grid; grid-template-columns:1fr 1.5fr; gap:48px; align-items:start; }
        @media(max-width:768px) { .contact-grid { grid-template-columns:1fr; gap:32px; } }
      `}</style>

      <div className="page-hero"><div className="container page-hero-inner">
        <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Contact</span></div>
        <span className="section-label">Get In Touch</span>
        <h1>Let&apos;s Talk About <em>Your Growth</em></h1>
        <p>Book a free 30-minute strategy session or send us a message. We&apos;ll get back to you within one business day — no obligation, no hard sell.</p>
      </div></div>

      <section style={{padding:'56px 0 64px',background:'var(--cream)'}}>
        <div className="container">
          <div className="contact-grid">
            <div style={{background:'linear-gradient(135deg,var(--coral) 0%,#d44420 55%,var(--terra) 100%)',borderRadius:24,padding:'36px 28px',position:'relative',overflow:'hidden'}}>
              <div style={{position:'relative',zIndex:2}}>
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'1.4rem',fontWeight:800,color:'var(--white)',marginBottom:10}}>We&apos;re Here to Help</div>
                <p style={{fontSize:'0.9rem',color:'rgba(255,255,255,0.75)',lineHeight:1.7,marginBottom:28}}>Whether you&apos;re ready to start or just exploring your options, we&apos;re happy to talk through what&apos;s possible for your business.</p>
                <div style={{display:'flex',flexDirection:'column',gap:18,marginBottom:28}}>
                  {contactItems.map(i=>(
                    <div key={i.label} style={{display:'flex',alignItems:'center',gap:12}}>
                      <div style={{width:40,height:40,flexShrink:0,background:'rgba(255,255,255,0.15)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center'}}>
                        {i.icon}
                      </div>
                      <div>
                        <div style={{fontSize:'0.7rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'rgba(255,255,255,0.55)',marginBottom:2}}>{i.label}</div>
                        {i.link
                          ? <a href={i.link} target="_blank" rel="noopener noreferrer" style={{fontSize:'0.92rem',color:'var(--white)',fontWeight:500,textDecoration:'underline'}}>{i.val}</a>
                          : <div style={{fontSize:'0.92rem',color:'var(--white)',fontWeight:500}}>{i.val}</div>
                        }
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{background:'rgba(255,255,255,0.12)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:12,padding:'14px 16px',display:'flex',alignItems:'flex-start',gap:10}}>
                  <div style={{width:22,height:22,flexShrink:0,background:'var(--amber)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.7rem',fontWeight:800,color:'var(--text)'}}>&#10003;</div>
                  <p style={{fontSize:'0.84rem',color:'rgba(255,255,255,0.85)',lineHeight:1.5}}>Free 30-minute strategy call — no commitment, no pitch decks, just an honest conversation.</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}