'use client';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        'service_gky9cvq',
        'template_yvq59vr',
        formRef.current!,
        '7p4O9_DB_4qMMLH1A'
      );
      setStatus('success');
      formRef.current?.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <div style={{background:'var(--white)',borderRadius:24,padding:'36px 32px',border:'1px solid rgba(0,0,0,0.07)'}}>
      <div style={{fontFamily:'Syne,sans-serif',fontSize:'1.3rem',fontWeight:800,color:'var(--text)',marginBottom:6}}>Send Us a Message</div>
      <p style={{fontSize:'0.9rem',color:'var(--warm-gray)',marginBottom:28}}>Fill out the form below and we will get back to you within one business day.</p>

      {status === 'success' && (
        <div style={{background:'rgba(34,197,94,0.08)',border:'1px solid rgba(34,197,94,0.2)',borderRadius:12,padding:'16px 20px',marginBottom:24,display:'flex',gap:12,alignItems:'center'}}>
          <span style={{fontSize:'1.2rem'}}>&#10003;</span>
          <div>
            <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,color:'#16a34a',marginBottom:2}}>Message Sent!</div>
            <div style={{fontSize:'0.88rem',color:'#16a34a'}}>We will be in touch within one business day.</div>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.2)',borderRadius:12,padding:'16px 20px',marginBottom:24}}>
          <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,color:'#dc2626',marginBottom:2}}>Something went wrong</div>
          <div style={{fontSize:'0.88rem',color:'#dc2626'}}>Please try again or email us directly at hello@signalforge.marketing</div>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16}}>
          <div>
            <label style={{display:'block',fontSize:'0.8rem',fontFamily:'Syne,sans-serif',fontWeight:700,color:'var(--text)',marginBottom:6}}>Full Name *</label>
            <input name="from_name" required placeholder="Jane Smith" style={{width:'100%',padding:'10px 14px',borderRadius:10,border:'1px solid rgba(0,0,0,0.12)',fontSize:'0.92rem',fontFamily:'inherit',outline:'none',boxSizing:'border-box'}} />
          </div>
          <div>
            <label style={{display:'block',fontSize:'0.8rem',fontFamily:'Syne,sans-serif',fontWeight:700,color:'var(--text)',marginBottom:6}}>Email Address *</label>
            <input name="from_email" type="email" required placeholder="jane@company.com" style={{width:'100%',padding:'10px 14px',borderRadius:10,border:'1px solid rgba(0,0,0,0.12)',fontSize:'0.92rem',fontFamily:'inherit',outline:'none',boxSizing:'border-box'}} />
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16}}>
          <div>
            <label style={{display:'block',fontSize:'0.8rem',fontFamily:'Syne,sans-serif',fontWeight:700,color:'var(--text)',marginBottom:6}}>Company</label>
            <input name="company" placeholder="Acme Inc." style={{width:'100%',padding:'10px 14px',borderRadius:10,border:'1px solid rgba(0,0,0,0.12)',fontSize:'0.92rem',fontFamily:'inherit',outline:'none',boxSizing:'border-box'}} />
          </div>
          <div>
            <label style={{display:'block',fontSize:'0.8rem',fontFamily:'Syne,sans-serif',fontWeight:700,color:'var(--text)',marginBottom:6}}>Phone</label>
            <input name="phone" type="tel" placeholder="(617) 555-0100" style={{width:'100%',padding:'10px 14px',borderRadius:10,border:'1px solid rgba(0,0,0,0.12)',fontSize:'0.92rem',fontFamily:'inherit',outline:'none',boxSizing:'border-box'}} />
          </div>
        </div>
        <div style={{marginBottom:16}}>
          <label style={{display:'block',fontSize:'0.8rem',fontFamily:'Syne,sans-serif',fontWeight:700,color:'var(--text)',marginBottom:6}}>What can we help you with? *</label>
          <select name="service" required style={{width:'100%',padding:'10px 14px',borderRadius:10,border:'1px solid rgba(0,0,0,0.12)',fontSize:'0.92rem',fontFamily:'inherit',outline:'none',background:'var(--white)',boxSizing:'border-box'}}>
            <option value="">Select a service...</option>
            <option>Marketing Automation</option>
            <option>SMS Marketing</option>
            <option>Social Media Campaigns</option>
            <option>Ad Creative Design</option>
            <option>Website Design & Build</option>
            <option>Event Marketing</option>
            <option>Constant Contact Setup</option>
            <option>General Inquiry</option>
          </select>
        </div>
        <div style={{marginBottom:24}}>
          <label style={{display:'block',fontSize:'0.8rem',fontFamily:'Syne,sans-serif',fontWeight:700,color:'var(--text)',marginBottom:6}}>Message *</label>
          <textarea name="message" required rows={5} placeholder="Tell us about your business and what you are looking to achieve..." style={{width:'100%',padding:'10px 14px',borderRadius:10,border:'1px solid rgba(0,0,0,0.12)',fontSize:'0.92rem',fontFamily:'inherit',outline:'none',resize:'vertical',boxSizing:'border-box'}} />
        </div>
        <button type="submit" disabled={status==='sending'} className="btn btn-primary" style={{width:'100%',justifyContent:'center',opacity:status==='sending'?0.7:1}}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}