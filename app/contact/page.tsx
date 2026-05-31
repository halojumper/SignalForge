import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from './ContactForm';
export const metadata: Metadata = { title: 'Contact' };

export default function Contact() {
  return (
    <>
      <div className="page-hero"><div className="container page-hero-inner">
        <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Contact</span></div>
        <span className="section-label">Get In Touch</span>
        <h1>Let's Talk About <em>Your Growth</em></h1>
        <p>Book a free 30-minute strategy session or send us a message. We'll get back to you within one business day — no obligation, no hard sell.</p>
      </div></div>
      <section style={{padding:'80px 0',background:'var(--cream)'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.5fr',gap:56,alignItems:'start'}}>
            {/* Info card */}
            <div style={{background:'linear-gradient(135deg,var(--coral) 0%,#d44420 55%,var(--terra) 100%)',borderRadius:24,padding:'40px 32px',position:'relative',overflow:'hidden'}}>
              <div style={{position:'relative',zIndex:2}}>
                <div style={{fontFamily:'Syne,sans-serif',fontSize:'1.5rem',fontWeight:800,color:'var(--white)',marginBottom:10}}>We're Here to Help</div>
                <p style={{fontSize:'0.92rem',color:'rgba(255,255,255,0.75)',lineHeight:1.7,marginBottom:32}}>Whether you're ready to start or just exploring your options, we're happy to talk through what's possible for your business.</p>
                <div style={{display:'flex',flexDirection:'column',gap:20,marginBottom:32}}>
                  {[
                    {icon:'📧',label:'Email Us',val:'hello@signalforge.com'},
                    {icon:'📞',label:'Call Us',val:'(617) 555-0190'},
                    {icon:'📍',label:'Based In',val:'Greater Boston, MA'},
                    {icon:'🕐',label:'Business Hours',val:'Mon – Fri, 9am – 6pm ET'},
                    {icon:'⚡',label:'Response Time',val:'Within 1 business day'},
                  ].map(i=>(
                    <div key={i.label} style={{display:'flex',alignItems:'flex-start',gap:14}}>
                      <div style={{width:42,height:42,flexShrink:0,background:'rgba(255,255,255,0.15)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.1rem'}}>{i.icon}</div>
                      <div>
                        <div style={{fontSize:'0.72rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'rgba(255,255,255,0.55)',marginBottom:3}}>{i.label}</div>
                        <div style={{fontSize:'0.95rem',color:'var(--white)',fontWeight:500}}>{i.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{background:'rgba(255,255,255,0.12)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:12,padding:'16px 18px',display:'flex',alignItems:'flex-start',gap:12}}>
                  <div style={{width:24,height:24,flexShrink:0,background:'var(--amber)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.75rem',fontWeight:800,color:'var(--text)'}}>✓</div>
                  <p style={{fontSize:'0.86rem',color:'rgba(255,255,255,0.85)',lineHeight:1.5}}>Free 30-minute strategy call — no commitment, no pitch decks, just an honest conversation.</p>
                </div>
              </div>
            </div>
            {/* Form — client component */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
