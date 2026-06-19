import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from './ContactForm';
import ServiceAreaMap from '@/components/ServiceAreaMap';
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
        .contact-hero-img { position:relative; width:100%; height:420px; overflow:hidden; }
        .contact-hero-img img { object-fit:cover; object-position:center 30%; }
        .contact-hero-overlay {
          position:absolute; inset:0;
          background:linear-gradient(
            to right,
            rgba(20,10,5,0.72) 0%,
            rgba(20,10,5,0.45) 45%,
            rgba(20,10,5,0.1) 100%
          );
        }
        .contact-hero-text {
          position:absolute; top:50%; left:0;
          transform:translateY(-50%);
          padding:0 48px;
          max-width:580px;
        }
        @media(max-width:768px) {
          .contact-grid { grid-template-columns:1fr; gap:32px; }
          .contact-hero-img { height:280px; }
          .contact-hero-text { padding:0 24px; max-width:100%; }
          .contact-hero-text h1 { font-size:1.6rem !important; }
        }
      `}</style>

      {/* PHOTO HERO */}
      <div className="contact-hero-img">
        <Image
          src="/images/business-meeting.jpg"
          alt="SignalForge team meeting with clients"
          fill
          priority
        />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-text">
          <div className="breadcrumb" style={{marginBottom:12}}>
            <Link href="/" style={{color:'rgba(255,255,255,0.7)'}}>Home</Link>
            <span style={{color:'rgba(255,255,255,0.5)'}}>›</span>
            <span style={{color:'rgba(255,255,255,0.7)'}}>Contact</span>
          </div>
          <span className="section-label" style={{color:'var(--amber)'}}>Get In Touch</span>
          <h1 style={{color:'var(--white)',fontSize:'clamp(1.8rem,3.5vw,2.8rem)',marginTop:8,marginBottom:14}}>
            Let&apos;s Talk About <em style={{color:'var(--amber)'}}>Your Growth</em>
          </h1>
          <p style={{color:'rgba(255,255,255,0.82)',fontSize:'1rem',lineHeight:1.7,maxWidth:440}}>
            Book a free 30-minute strategy session or send us a message. We&apos;ll get back to you within one business day — no obligation, no hard sell.
          </p>
        </div>
      </div>

      {/* CONTACT GRID */}
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
                          : i.label === 'Email Us'
                            ? <a href={`mailto:${i.val}`} style={{fontSize:'0.95rem',color:'var(--white)',fontWeight:500,textDecoration:'underline'}}>{i.val}</a>
                            : <div style={{fontSize:'0.95rem',color:'var(--white)',fontWeight:500}}>{i.val}</div>
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

      <ServiceAreaMap />
    </>
  );
}
